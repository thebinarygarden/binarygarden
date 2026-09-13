import type { Theme } from '@binarygarden/flora/theme';

export const lightTheme: Theme = {
  // Brand colors
  primary: '#48EDFF',
  onPrimary: '#0B1121',
  secondary: '#6b7280', // gray-500
  onSecondary: '#ffffff',
  tertiary: '#7c3aed', // violet-600
  onTertiary: '#ffffff',

  // Surface hierarchy
  background: '#F8FAFC',
  onBackground: '#0B1121',
  surface: '#f1f5f9', // slate-100
  onSurface: '#374151', // gray-700
  surfaceVariant: '#ecf3fa',
  onSurfaceVariant: '#435879',

  // Interactive states
  border: '#d1d5db', // gray-300
  hover: '#48EDFF',
  focus: '#48EDFF',
  disabled: '#f3f4f6', // gray-100
  onDisabled: '#9ca3af', // gray-400
  link: '#2563eb', // blue-600
  onLink: '#ffffff',

  // Semantic states
  error: '#dc2626', // red-600
  onError: '#ffffff',
  success: '#16a34a', // green-600
  onSuccess: '#ffffff',
  warning: '#ca8a04', // yellow-600
  onWarning: '#ffffff',
  info: '#0891b2', // cyan-600
  onInfo: '#ffffff',
  neutral: '#6b7280', // gray-500
  onNeutral: '#ffffff',
  highlight: '#fef3c7', // amber-100
  onHighlight: '#78350f', // amber-900
};

export const darkTheme: Theme = {
  // Brand colors
  primary: '#87ACFD',
  onPrimary: '#0B1121',
  secondary: '#9ca3af', // gray-400
  onSecondary: '#111827',
  tertiary: '#8b5cf6', // violet-500
  onTertiary: '#ffffff',

  // Surface hierarchy
  background: '#0B1121',
  onBackground: '#F8FAFC',
  surface: '#1e293b', // slate-800
  onSurface: '#e5e7eb', // gray-200
  surfaceVariant: '#273f67',
  onSurfaceVariant: '#d5dbdf',

  // Interactive states
  border: '#475569', // slate-600
  hover: '#87ACFD',
  focus: '#87ACFD',
  disabled: '#334155', // slate-700
  onDisabled: '#64748b', // slate-500
  link: '#87ACFD',
  onLink: '#0B1121',

  // Semantic states
  error: '#ef4444', // red-500
  onError: '#ffffff',
  success: '#22c55e', // green-500
  onSuccess: '#ffffff',
  warning: '#eab308', // yellow-500
  onWarning: '#111827',
  info: '#06b6d4', // cyan-500
  onInfo: '#ffffff',
  neutral: '#9ca3af', // gray-400
  onNeutral: '#111827',
  highlight: '#78350f', // amber-900
  onHighlight: '#fef3c7', // amber-100
};
