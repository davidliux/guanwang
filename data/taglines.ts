import { TaglineOption } from '@/types';

export const taglineOptions: Record<number, TaglineOption> = {
  1: {
    main: "We make your shipping journey simple, from border to buyer.",
    sub: "With NAECLA, you get customs, warehousing, and delivery all under one roof—so you can focus on growing your business with confidence."
  },
  2: {
    main: "More than logistics — a partner in your success.",
    sub: "From your factory gate to your customer's door, we handle every step of the journey, turning complex trade into smooth, stress-free solutions."
  },
  3: {
    main: "Turning global exporters into local North American players.",
    sub: "With over 70 years of combined expertise and an in-house customs team, we help you ship smarter, save more, and scale faster across Canada and the U.S."
  }
};

// Default tagline to use
export const defaultTaglineOption = 1;