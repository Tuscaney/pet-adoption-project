import "@testing-library/jest-dom";

// Polyfill TextEncoder/Decoder (needed for react-router)
import { TextEncoder, TextDecoder } from "util";
if (!global.TextEncoder) global.TextEncoder = TextEncoder;
if (!global.TextDecoder) global.TextDecoder = TextDecoder;
