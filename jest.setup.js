import "@testing-library/jest-dom";

// Polyfill TextEncoder/TextDecoder for libs that expect them (e.g., react-router)
import { TextEncoder, TextDecoder } from "util";
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;

// Optional: silence scrollTo errors in components using it
if (!window.scrollTo) window.scrollTo = () => {};
