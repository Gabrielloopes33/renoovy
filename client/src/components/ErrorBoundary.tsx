// Enhanced Error Boundary with better error handling and UX

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw, Mail } from "lucide-react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundaryClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught An Error');
      console.error('Error:', error);
      console.error('Error Info:', errorInfo);
      console.groupEnd();
    }

    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo);

    // Log error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.logErrorToService(error, errorInfo);
    }
  }

  private logErrorToService = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Example: Send to monitoring service
    console.warn('Error logged to monitoring service:', errorReport);
  };

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorFallback
          error={this.state.error}
          errorInfo={this.state.errorInfo}
          onRetry={this.handleRetry}
        />
      );
    }

    return this.props.children;
  }
}

// Error Fallback Component
interface ErrorFallbackProps {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  onRetry: () => void;
}

function ErrorFallback({ error, errorInfo, onRetry }: ErrorFallbackProps) {
  const isDevelopment = process.env.NODE_ENV === 'development';

  const handleReportError = () => {
    const subject = encodeURIComponent('Erro na aplicação Renoovy+');
    const body = encodeURIComponent(`
Descrição do erro:
${error?.message || 'Erro desconhecido'}

Detalhes técnicos:
${error?.stack || 'Stack trace não disponível'}

URL: ${window.location.href}
Timestamp: ${new Date().toISOString()}
User Agent: ${navigator.userAgent}
    `);
    
    window.open(`mailto:suporte@renoovy.com?subject=${subject}&body=${body}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="text-6xl mb-6">😕</div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Oops! Algo deu errado
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          Pedimos desculpas pelo inconveniente. Ocorreu um erro inesperado em nossa aplicação. 
          Nossa equipe já foi notificada e está trabalhando para resolver o problema.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={onRetry}
            className={cn(
              "flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition",
              "bg-gradient-to-r from-purple-600 to-purple-800 text-white",
              "hover:from-purple-700 hover:to-purple-900"
            )}
          >
            <RotateCcw size={16} />
            Tentar Novamente
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Voltar ao Início
          </button>
          
          <button
            onClick={handleReportError}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            <Mail size={16} />
            Reportar Erro
          </button>
        </div>

        {isDevelopment && error && (
          <details className="text-left bg-gray-50 rounded-lg p-4 mb-4">
            <summary className="cursor-pointer font-semibold text-gray-700 mb-2">
              Detalhes do Erro (Desenvolvimento)
            </summary>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-red-600">Mensagem:</h4>
                <pre className="text-sm text-red-700 bg-red-50 p-2 rounded overflow-auto">
                  {error.message}
                </pre>
              </div>
              
              {error.stack && (
                <div>
                  <h4 className="font-semibold text-red-600">Stack Trace:</h4>
                  <pre className="text-xs text-red-700 bg-red-50 p-2 rounded overflow-auto max-h-32">
                    {error.stack}
                  </pre>
                </div>
              )}
              
              {errorInfo?.componentStack && (
                <div>
                  <h4 className="font-semibold text-red-600">Component Stack:</h4>
                  <pre className="text-xs text-red-700 bg-red-50 p-2 rounded overflow-auto max-h-32">
                    {errorInfo.componentStack}
                  </pre>
                </div>
              )}
            </div>
          </details>
        )}

        <p className="text-sm text-gray-500">
          Se o problema persistir, entre em contato conosco em{' '}
          <a href="mailto:suporte@renoovy.com" className="text-purple-600 hover:underline">
            suporte@renoovy.com
          </a>
        </p>
      </div>
    </div>
  );
}

// Main Error Boundary Export
export default function ErrorBoundary(props: Props) {
  return <ErrorBoundaryClass {...props} />;
}

// Hook for programmatic error reporting
export function useErrorHandler() {
  const handleError = React.useCallback((error: Error, context?: string) => {
    console.error('Error caught by useErrorHandler:', error);
    
    // Log to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      // errorMonitoringService.captureException(error, { 
      //   extra: { context, timestamp: new Date().toISOString() }
      // });
    }
  }, []);

  const handleAsyncError = React.useCallback((asyncFn: () => Promise<any>, context?: string) => {
    return asyncFn().catch(error => {
      handleError(error, context);
      throw error; // Re-throw to allow component-level handling if needed
    });
  }, [handleError]);

  return { handleError, handleAsyncError };
}
