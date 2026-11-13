"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { HOTEL_INFO } from "@/lib/constants";
import { Reveal, Stagger, StaggerItem, useReducedMotion } from "@/components/motion/Reveal";

export const HomeHero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (reduceMotion) {
      video.pause();
      try {
        video.currentTime = 0;
      } catch {
        // ignore seek issues before metadata is ready
      }
      return;
    }
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // autoplay can be blocked; poster/background image remains visible
      });
    }
  }, [reduceMotion]);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#173F56] supports-[height:100dvh]:min-h-[100dvh]">
      {/* Background Video & Duotone Bleed */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay={!reduceMotion}
          muted
          loop={!reduceMotion}
          playsInline
          preload="metadata"
          poster="/images/hotel/hero-beach.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/home-hero.mp4" type="video/mp4" />
        </video>
        <Image
          src="/images/hotel/hero-beach.jpg"
          alt="Sri Lanka Southern Coast Ocean View at Golden Hour"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001e2e]/85 via-[#001e2e]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001e2e]/80 via-transparent to-black/30" />
      </div>

      {/* Hero Content Container - Full Height Layout with Header Clearance */}
      <div className="relative z-10 mx-auto flex h-full min-h-[100svh] w-full max-w-7xl flex-col justify-between px-4 pb-6 pt-24 sm:px-6 sm:pb-8 sm:pt-28 lg:px-8 supports-[height:100dvh]:min-h-[100dvh]">
        <div className="w-full" />

        {/* Headline & CTAs (Left Aligned matching Stitch reference) */}
        <Stagger className="my-auto max-w-2xl py-6 text-left sm:py-8" amount={0.3}>
          <StaggerItem>
            <h1 className="mb-4 font-heading text-[34px] font-normal leading-[1.1] tracking-tight text-white drop-shadow-md sm:text-[46px] md:text-[56px] lg:text-[64px] lg:leading-[1.08]">
              Your Quiet Escape
              <br />
              <span className="font-normal italic">by the Sea</span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="mb-6 max-w-lg font-sans text-[15px] font-light leading-relaxed text-white/90 drop-shadow-sm sm:mb-8 sm:text-[16px] md:text-[18px]">
              Discover a slower pace where Indian Ocean tides meet modern barefoot sanctuary living.
            </p>
          </StaggerItem>

          <StaggerItem>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
              <a
                href={HOTEL_INFO.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#2f6b8f] px-7 text-[14px] font-medium text-white shadow-[0_8px_24px_-4px_rgba(23,63,86,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2e698c] sm:w-auto"
              >
                <span>Book Your Stay</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <Link
                href="#the-stay"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 text-[14px] font-medium text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25566f]/90 sm:w-auto"
              >
                <span>Explore the Stay</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </StaggerItem>
        </Stagger>

        {/* Bottom Status / Meta Bar */}
        <Reveal y={10} delay={0.2} className="flex w-full flex-col items-start justify-between gap-3 border-t border-white/20 pt-4 sm:flex-row sm:items-center sm:gap-4 sm:pt-6">
          <div className="flex items-start gap-2 font-sans text-xs font-light text-white/85 sm:items-center">
            <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/80 sm:mt-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0M3 10c2.5-2.5 5.5-2.5 8 0 2.5 2.5 5.5 2.5 8 0" />
            </svg>
            <span>Uncrowded Southern Shoreline · Matara District</span>
          </div>

          <div className="hidden items-center gap-1.5 font-sans text-xs font-light text-white/70 sm:flex">
            <span>Scroll to explore</span>
            <svg className="h-4 w-4 animate-bounce motion-reduce:animate-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
