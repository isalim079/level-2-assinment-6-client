/** @type {import('next').NextConfig} */
module.exports = {
    images: {
      domains: ['i.ibb.co.com'],
    },
    env: {
      BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL,
    },
  }
