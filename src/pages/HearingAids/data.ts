import { Bluetooth, Battery, ShieldCheck, Ear, Wifi } from 'lucide-react';
import imgBTE from '../../assets/images/hearing-aid/bte.webp';
import imgRIC from '../../assets/images/hearing-aid/ric.webp';
import imgIIC from '../../assets/images/hearing-aid/iic.webp';
import imgCIC from '../../assets/images/hearing-aid/cic.webp';
import imgITE from '../../assets/images/hearing-aid/ite.webp';
import imgITC from '../../assets/images/hearing-aid/itc.webp';
import imgSP  from '../../assets/images/hearing-aid/super-power.webp';

export const categories = [
  {
    id: 'ric',
    abbr: 'RIC',
    name: 'Receiver-in-Canal',
    tagline: 'Slim. Wireless. Invisible-adjacent.',
    image: imgRIC,
    glowColor: 'oklch(0.55 0.06 175)',
    description:
      'The most-recommended style worldwide. A featherweight processor sits behind the ear; the receiver sits directly in the canal for natural, open sound. Bluetooth streaming and rechargeable options available.',
    suitability: 'Mild to profound hearing loss',
    specs: [
      { icon: Bluetooth, label: 'Bluetooth 5.3' },
      { icon: Battery,   label: 'Rechargeable' },
      { icon: Wifi,      label: 'App-connected' },
    ],
    features: ['Open-fit comfort', 'Directional microphones', 'Wind noise suppression', 'Tinnitus masking'],
  },
  {
    id: 'bte',
    abbr: 'BTE',
    name: 'Behind-the-Ear',
    tagline: 'Maximum power. Built to last.',
    image: imgBTE,
    glowColor: 'oklch(0.40 0.09 20)',
    description:
      'A full-sized processor rests behind the ear and delivers robust amplification through a thin tube. Preferred when power, durability, or manual dexterity matters most.',
    suitability: 'Moderate to profound hearing loss',
    specs: [
      { icon: ShieldCheck, label: 'IP68 rated' },
      { icon: Ear,         label: 'High power' },
      { icon: Battery,     label: 'Long battery life' },
    ],
    features: ['Telecoil support', 'Pediatric-ready', 'Easy volume control', 'Replaceable battery'],
  },
  {
    id: 'iic',
    abbr: 'IIC',
    name: 'Invisible-in-Canal',
    tagline: 'Deep. Discreet. Almost invisible.',
    image: imgIIC,
    glowColor: 'oklch(0.35 0.03 260)',
    description:
      'The smallest custom-moulded style. Fits entirely inside the canal, invisible to the naked eye. Leverages the ear\'s natural anatomy for exceptional sound localisation.',
    suitability: 'Mild to moderately severe loss',
    specs: [
      { icon: Ear,       label: 'Invisible fit' },
      { icon: ShieldCheck, label: 'Custom moulded' },
      { icon: Wifi,      label: 'Natural acoustics' },
    ],
    features: ['Zero external visibility', 'Natural ear-cup effect', 'Occlusion-free design', 'Custom ear impression'],
  },
  {
    id: 'cic',
    abbr: 'CIC',
    name: 'Completely-in-Canal',
    tagline: 'Compact. Confident. Customised.',
    image: imgCIC,
    glowColor: 'oklch(0.40 0.13 155)',
    description:
      'Nearly invisible from the outside, CIC fits completely in the ear canal and is moulded to your unique anatomy. Lightweight and cosmetically excellent.',
    suitability: 'Mild to moderately severe loss',
    specs: [
      { icon: Ear,       label: 'Near-invisible' },
      { icon: ShieldCheck, label: 'Custom mould' },
      { icon: Battery,   label: 'Discreet battery' },
    ],
    features: ['Minimal wind noise', 'Discreet cosmetics', 'Directional hearing', 'Removal cord for easy use'],
  },
  {
    id: 'ite',
    abbr: 'ITE',
    name: 'In-the-Ear',
    tagline: 'Easy to handle. Easy to hear.',
    image: imgITE,
    glowColor: 'oklch(0.35 0.08 260)',
    description:
      'Fills the outer bowl of the ear. Larger controls make it ideal for patients who prefer straightforward operation, and the bigger housing allows powerful processing.',
    suitability: 'Mild to severe hearing loss',
    specs: [
      { icon: Battery,     label: 'All-day power' },
      { icon: Bluetooth,   label: 'Bluetooth ready' },
      { icon: ShieldCheck, label: 'Durable shell' },
    ],
    features: ['Large, easy controls', 'Directional microphone', 'Bluetooth streaming', 'Volume wheel'],
  },
  {
    id: 'itc',
    abbr: 'ITC',
    name: 'In-the-Canal',
    tagline: 'Discreet. Natural. Precise.',
    image: imgITC,
    glowColor: 'oklch(0.65 0.05 80)',
    description:
      'Half-shell design that sits in the lower part of the ear bowl. Balances discretion with practical features — larger than CIC but still remarkably low-profile.',
    suitability: 'Mild to moderately severe loss',
    specs: [
      { icon: Ear,         label: 'Semi-custom fit' },
      { icon: Battery,     label: 'Extended life' },
      { icon: ShieldCheck, label: 'Push-button control' },
    ],
    features: ['Skin-tone shell', 'Volume control', 'Directional mics', 'Comfortable all-day wear'],
  },
  {
    id: 'sp',
    abbr: 'SP',
    name: 'Super Power BTE',
    tagline: 'Profound loss. No compromise.',
    image: imgSP,
    glowColor: 'oklch(0.60 0.13 80)',
    description:
      'Engineered for severe to profound hearing loss. Delivers maximum gain and output through a reinforced housing and powerful receiver, while maintaining speech clarity.',
    suitability: 'Severe to profound hearing loss',
    specs: [
      { icon: Ear,         label: 'Max amplification' },
      { icon: ShieldCheck, label: 'IP67 rated' },
      { icon: Battery,     label: 'Extended battery' },
    ],
    features: ['High-power receiver', 'Feedback cancellation', 'Telecoil built-in', 'Pediatric and adult sizes'],
  },
];

export const techFeatures = [
  {
    icon: Bluetooth,
    title: 'Bluetooth Streaming',
    body: 'Stream calls, music, and TV audio directly to your hearing aids from any paired device.',
  },
  {
    icon: Battery,
    title: 'Rechargeable Battery',
    body: 'One overnight charge powers a full day of use — no more tiny batteries to replace.',
  },
  {
    icon: ShieldCheck,
    title: 'AI Noise Reduction',
    body: 'Advanced algorithms distinguish speech from background noise in real time for natural listening.',
  },
  {
    icon: Ear,
    title: 'Tinnitus Relief',
    body: 'Built-in sound therapy programmes offer lasting relief from ringing and buzzing sensations.',
  },
];
