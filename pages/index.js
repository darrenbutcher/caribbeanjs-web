import Head from 'next/head'
import LogoSVG from '@/atoms/logo-svg'
import MainLayout from '@/layouts/main-layout'
import SubscriptionForm from '@/organisms/subscription-form'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home({ colorSelection = "yellow" }) {
  const inviteURL = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL

  return (
    <MainLayout>
      <NextSeo
        title="Caribbean JS"
        titleTemplate = '%s &bull; Community for JavaScript developers in the Caribbean'
        description="Community for JavaScript developers in the Caribbean"
        canonical="https://caribbeanjs.org"
        openGraph={{
        url: 'https://caribbeanjs.org',
        title: 'Caribbean JS',
        description: 'Online Community for JavaScript developers in the Caribbean',
        images: [
          {
            url: 'https://caribbeanjs.org/cjs-og.png',
            width: 1280,
            height: 720,
            alt: 'Caribbean'
          },
        ],
      }}
      twitter={{
        handle: '@caribbean_js',
        site: '@caribbean_js',
        cardType: 'summary_large_image',
      }}
      />
    <div className="md:flex md:space-x-24 mt-4">
      <section>
        <LogoSVG colorSelection={colorSelection} />
        <br />
        <Image
          src="/images/jsf-logos.svg"
          alt="Javascript Frameworks Logos"
          width={600}
          height={300}
          className="mx-auto animate-pulse"
        />
        <h5 className="font-poppins font-bold mt-12 text-center bg-yellow-300 px-2 py-2">Partner spotlight &bull; <a href="https://frontenddeveloperlove.com" target="_blank" className="hover:text-white">JSWorld Conf Feb 22-27, 2021</a></h5>
      </section>
      <section className="pt-12 md:pt-0 text-center md:text-left">
        <h1 className="font-poppins font-bold text-3xl md:text-4xl text-gray-900 leading-normal md:leading-normal">
          Online <span className={`text-${colorSelection}-500 animate-pulse`}>community</span> for JavaScript developers in the Caribbean 
        </h1>
        <p className="text-gray-700 text-2xl font-bold mt-8 text-center md:text-left font-poppins">
          Discuss, educate and promote the love of Javascript. 
        </p>
        <a href={`${inviteURL}`} target="_blank" className="flex flex-col md:flex-row mt-6 items-center justify-center md:justify-start space-x-2 text-gray-700 hover:text-gray-900">
          <Image
            src="/images/discord-logo.svg"
            alt="Discord logo"
            width={48}
            height={48}
          />
          <p className="font-bold text-xl font-poppins px-4 py-2 bg-gray-900 text-white hover:bg-gray-700">Join us online on Discord</p>
        </a>
        <section className="space-y-2 mt-24">
          <p className="text-gray-700 text-center md:text-left font-bold">Join our mailing list to get updates on community news, events, jobs &amp; resources.</p>
          <SubscriptionForm />
        </section>
      </section>
    </div>
    </MainLayout>
  )
}
