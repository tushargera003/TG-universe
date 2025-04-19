import React from "react";
import { ThemeProvider } from "./ThemeProvider";
import ButtonShowcase from "./components/ButtonShowCase";
import CardShowcase from "./components/CardShowcase";
import SpinnerShowcase from "./components/SpinnerShowcase";
import NavbarShowcase from "./components/NavbarShowcase";
import { motion } from "framer-motion";
import PricingGrid from "./components/PricingGrid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PaginationShowcase from "./components/PaginationShowcase";
import SliderShowcase from "./components/SliderShowcase";
import BreadcrumbsShowcase from "./components/BreadcrumbsShowcase";
import ToastShowcase from "./components/ToastShowcase";
import CarouselShowcase from "./components/CarouselShowcase";
import HeroShowcase from "./components/HeroShowcase";
import ModalShowcase from "./components/ModalShowcase";
import CartShowcase from "./components/CartShowcase";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUsShowcase from "./components/AboutUsShowcase";
import AuthPageShowcase from "./components/AuthPageShowcase";
import SkeletonShowcase from "./components/SkeletonShowcase";
import ChatBubbleShowcase from "./components/ChatBubbleShowcase";
import HeaderFooterShowcase from "./components/HeaderFooterShowcase";
import ContactShowcase from "./components/ContactShowcase";
import ProductShowcase from "./components/ProductShowcase";
import DashboardWidgetsShowcase from "./components/DashboardWidgetsShowcase";
import InputShowcase from "./components/InputShowcase";
import NotFoundShowcase from "./components/NotFoundShowcase";
import ErrorPage from "./components/ErrorPage";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/pagenotfound" element={<NotFoundShowcase />}></Route>
            <Route path="/inputs" element={<InputShowcase />}></Route>
            <Route
              path="/widgets"
              element={<DashboardWidgetsShowcase />}
            ></Route>
            <Route path="/products" element={<ProductShowcase />}></Route>
            <Route path="/contact" element={<ContactShowcase />}></Route>
            <Route
              path="/header-footer"
              element={<HeaderFooterShowcase />}
            ></Route>

            <Route path="/chat" element={<ChatBubbleShowcase />}></Route>
            <Route path="/skeleton" element={<SkeletonShowcase />}></Route>
            <Route path="/auth" element={<AuthPageShowcase />}></Route>
            <Route path="/aboutus" element={<AboutUsShowcase />}></Route>
            <Route path="/hero" element={<HeroShowcase />}></Route>
            <Route path="/cart" element={<CartShowcase />}></Route>
            <Route path="/modals" element={<ModalShowcase />}></Route>

            <Route path="/slider" element={<SliderShowcase />}></Route>
            <Route path="/carousel" element={<CarouselShowcase />}></Route>
            <Route path="/toast" element={<ToastShowcase />}></Route>
            <Route
              path="/breadcrumbs"
              element={<BreadcrumbsShowcase />}
            ></Route>
            <Route path="/pagingation" element={<PaginationShowcase />}></Route>
            <Route path="/navbar" element={<NavbarShowcase />}></Route>
            <Route path="/spinner" element={<SpinnerShowcase />}></Route>
            <Route path="/card" element={<CardShowcase />}></Route>
            <Route path="/button" element={<ButtonShowcase />}></Route>
            <Route path="/*" element={<ErrorPage />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
