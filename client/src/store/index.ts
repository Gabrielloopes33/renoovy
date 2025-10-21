// Global state management with Zustand

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { PackageResponseDTO } from '@/application/dtos';

// Cart state interface
interface CartItem {
  package: PackageResponseDTO;
  quantity: number;
  addedAt: Date;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addItem: (packageItem: PackageResponseDTO, quantity?: number) => void;
  removeItem: (packageId: string) => void;
  updateQuantity: (packageId: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Computed values
  getTotalItems: () => number;
  getTotalPrice: () => number;
  getItemCount: (packageId: string) => number;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],
        isOpen: false,

        addItem: (packageItem, quantity = 1) => {
          set((state) => {
            const existingItem = state.items.find(item => item.package.id === packageItem.id);
            
            if (existingItem) {
              return {
                items: state.items.map(item =>
                  item.package.id === packageItem.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                )
              };
            } else {
              return {
                items: [...state.items, { 
                  package: packageItem, 
                  quantity, 
                  addedAt: new Date() 
                }]
              };
            }
          });
        },

        removeItem: (packageId) => {
          set((state) => ({
            items: state.items.filter(item => item.package.id !== packageId)
          }));
        },

        updateQuantity: (packageId, quantity) => {
          if (quantity <= 0) {
            get().removeItem(packageId);
            return;
          }
          
          set((state) => ({
            items: state.items.map(item =>
              item.package.id === packageId
                ? { ...item, quantity }
                : item
            )
          }));
        },

        clearCart: () => {
          set({ items: [] });
        },

        toggleCart: () => {
          set((state) => ({ isOpen: !state.isOpen }));
        },

        openCart: () => {
          set({ isOpen: true });
        },

        closeCart: () => {
          set({ isOpen: false });
        },

        getTotalItems: () => {
          return get().items.reduce((total, item) => total + item.quantity, 0);
        },

        getTotalPrice: () => {
          return get().items.reduce((total, item) => 
            total + (item.package.finalPrice * item.quantity), 0
          );
        },

        getItemCount: (packageId) => {
          const item = get().items.find(item => item.package.id === packageId);
          return item ? item.quantity : 0;
        },
      }),
      {
        name: 'renoovy-cart',
        partialize: (state) => ({
          items: state.items,
        }),
      }
    ),
    { name: 'cart-store' }
  )
);

// UI state interface
interface UIState {
  sidebarOpen: boolean;
  loading: boolean;
  notifications: Notification[];
  
  // Actions
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
  setLoading: (loading: boolean) => void;
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message?: string;
  duration?: number;
  createdAt: Date;
}

export const useUIStore = create<UIState>()(
  devtools(
    (set, get) => ({
      sidebarOpen: false,
      loading: false,
      notifications: [],

      setSidebarOpen: (open) => {
        set({ sidebarOpen: open });
      },

      toggleSidebar: () => {
        set((state) => ({ sidebarOpen: !state.sidebarOpen }));
      },

      setLoading: (loading) => {
        set({ loading });
      },

      addNotification: (notification) => {
        const id = `notification_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        const newNotification: Notification = {
          ...notification,
          id,
          createdAt: new Date(),
        };

        set((state) => ({
          notifications: [...state.notifications, newNotification]
        }));

        // Auto remove notification after duration
        if (notification.duration !== 0) {
          setTimeout(() => {
            get().removeNotification(id);
          }, notification.duration || 5000);
        }
      },

      removeNotification: (id) => {
        set((state) => ({
          notifications: state.notifications.filter(n => n.id !== id)
        }));
      },

      clearNotifications: () => {
        set({ notifications: [] });
      },
    }),
    { name: 'ui-store' }
  )
);

// User preferences state
interface UserPreferencesState {
  theme: 'light' | 'dark' | 'system';
  language: 'pt-BR' | 'en-US';
  currency: 'BRL' | 'USD';
  
  // Analytics consent
  analyticsConsent: boolean;
  marketingConsent: boolean;
  
  // Recently viewed
  recentlyViewed: string[];
  
  // Actions
  setTheme: (theme: 'light' | 'dark' | 'system') => void;
  setLanguage: (language: 'pt-BR' | 'en-US') => void;
  setCurrency: (currency: 'BRL' | 'USD') => void;
  setAnalyticsConsent: (consent: boolean) => void;
  setMarketingConsent: (consent: boolean) => void;
  addRecentlyViewed: (itemId: string) => void;
  clearRecentlyViewed: () => void;
}

export const useUserPreferencesStore = create<UserPreferencesState>()(
  devtools(
    persist(
      (set, get) => ({
        theme: 'light',
        language: 'pt-BR',
        currency: 'BRL',
        analyticsConsent: false,
        marketingConsent: false,
        recentlyViewed: [],

        setTheme: (theme) => {
          set({ theme });
        },

        setLanguage: (language) => {
          set({ language });
        },

        setCurrency: (currency) => {
          set({ currency });
        },

        setAnalyticsConsent: (consent) => {
          set({ analyticsConsent: consent });
        },

        setMarketingConsent: (consent) => {
          set({ marketingConsent: consent });
        },

        addRecentlyViewed: (itemId) => {
          set((state) => {
            const filtered = state.recentlyViewed.filter(id => id !== itemId);
            return {
              recentlyViewed: [itemId, ...filtered].slice(0, 10) // Keep only last 10
            };
          });
        },

        clearRecentlyViewed: () => {
          set({ recentlyViewed: [] });
        },
      }),
      {
        name: 'user-preferences',
      }
    ),
    { name: 'user-preferences-store' }
  )
);