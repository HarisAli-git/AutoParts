import {
  FaCheckCircle,
  FaHandshake,
  FaHistory,
  FaMoneyBillAlt,
  FaStar,
  FaTruck,
} from "react-icons/fa";

const strings = {
  title: "Welcome to Our Website",
  description:
    "Elevate your drive with the perfect accessories, turning every journey into an unforgettable adventure. Upgrade your style, enhance your performance, and let your personality shine on the road ahead.",
  subtitle: "Welcome to Our Website",
  call_us_at: "CALL US AT",
};

const CONTACT = {
  PHONE_NUMBER: "1-866-616-0833",
};

const ERRORS = {
  page_not_found: "404 - Page Not Found!",
  be_fetch: "Could Not Fetch Data from Backend!",
  unexpected_err: "An Unexpected Error Occurred!",
};

const FEATURES = {
  fast_delivery: "Fast Delivery",
  competitive_prices: "Competitive Prices",
  buy_with_confidence: "Buy With Confidence",
  fast_delivery_desc:
    "Get the parts and accessories you need when you need them.",
  competitive_prices_desc:
    "We have all the parts you need at the most competitive prices.",
  buy_with_confidence_desc: "Delivering reliable & trusted service since 2023.",
};

const HOME_FEATURES_DATA = [
  {
    icon: FaMoneyBillAlt,
    title: "Competitive Prices",
    description: "We offer the best prices for auto parts.",
  },
  {
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Get your parts delivered quickly.",
  },
  {
    icon: FaHandshake,
    title: "Buy with Confidence",
    description: "Shop with us with peace of mind.",
  },
];

const PARTS_FEATURES_DATA = [
  {
    icon: FaHistory,
    title: "22+ Years in Business",
  },
  {
    icon: FaStar,
    title: "4.7 Star Ratings",
  },
  {
    icon: FaTruck,
    title: "Nationwide Door-Step Delivery",
  },
  {
    icon: FaCheckCircle,
    title: "Fitment Guarantee",
  },
];

export {
  ERRORS,
  strings,
  CONTACT,
  FEATURES,
  HOME_FEATURES_DATA,
  PARTS_FEATURES_DATA,
};
