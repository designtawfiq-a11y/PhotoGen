// FIX: Import icon components for use in STUDIOS constant.
import { ImageIcon } from './components/icons/ImageIcon';
import { MockupIcon } from './components/icons/MockupIcon';
import { PaletteIcon } from './components/icons/PaletteIcon';

export const PROMPT_IDEAS = [
  "A majestic lion wearing a crown, cinematic lighting, photorealistic",
  "An enchanted forest at night, glowing mushrooms and fireflies, fantasy art",
  "A retro-futuristic cityscape with flying cars and neon signs, synthwave style",
  "A tranquil Japanese garden with a koi pond and cherry blossoms, watercolor painting",
  "A surreal portrait of a woman made of swirling galaxies and stars, digital art",
  "An astronaut riding a unicorn on the moon, vibrant colors, pop art style",
  "A cozy library in a gothic castle, fireplace crackling, detailed and realistic",
  "Steampunk owl with intricate clockwork gears, detailed illustration",
  "A pirate ship sailing through a cosmic nebula, epic fantasy painting",
];

// FIX: Add STUDIOS constant for the Sidebar component.
export const STUDIOS = [
  { id: 'image', name: 'Image Studio', icon: ImageIcon },
  { id: 'mockup', name: 'Mockup Studio', icon: MockupIcon },
  { id: 'palette', name: 'Color Palette Studio', icon: PaletteIcon },
];

// FIX: Add MOCKUP_PRODUCTS constant for the Mockup Studio.
// Note: The imageUrls are placeholders as no assets are provided.
export const MOCKUP_PRODUCTS = [
  { id: 't-shirt', name: 'T-Shirt', imageUrl: 'https://via.placeholder.com/150/f3f4f6/9ca3af?text=T-Shirt' },
  { id: 'mug', name: 'Mug', imageUrl: 'https://via.placeholder.com/150/f3f4f6/9ca3af?text=Mug' },
  { id: 'tote-bag', name: 'Tote Bag', imageUrl: 'https://via.placeholder.com/150/f3f4f6/9ca3af?text=Tote+Bag' },
];
