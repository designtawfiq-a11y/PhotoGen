export interface GeneratedImage {
  id: string;
  url: string;
  prompt: string;
  base64: string;
  mimeType: string;
}

export type EnhancementType = 'sharpen' | 'denoise' | 'contrast';

// FIX: Add Color interface for the Color Palette Studio.
export interface Color {
  name: string;
  hex: string;
  rgb: string;
  cmyk: string;
}

// FIX: Add StudioId type for the Sidebar component.
export type StudioId = 'image' | 'mockup' | 'palette';
