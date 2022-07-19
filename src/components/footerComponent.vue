<template>
  <footer class="bg-gray-500">
    <div class="container mx-auto divide-y divide-black-300 p-4">
      <div class="mb-4 grid gap-4 md:grid-cols-4">
        <strong class="lg:col-span-2 p-2"
          ><router-link
            to="/"
            class="bg-[#6f00fe] text-white p-2.5 rounded-3xl hover:bg-red-700"
          >
            MOUFASHOP</router-link
          ></strong
        >
        <div class="md:col-span-3 lg:col-span-2">
          <div class="flex flex-col">
            <div class="mb-4">
              <h2 class="mb-2 font-bold">Subscribe to our newsletter</h2>
              <p>
                Get notified of new products, special promotions, sales, and
                more.
              </p>
            </div>
            <form action="#" class="flex gap-2">
              <label class="sr-only" for="email-address">Email address</label
              ><input
                type="email"
                name="email"
                value=""
                id="email-address"
                class="block w-full rounded border bg-gray-200 p-2 shadow-inner hover:bg-white focus:bg-white"
                placeholder="Email address"
                required=""
              /><button
                type="submit"
                class="rounded border bg-gray-200 p-2 shadow-sm hover:bg-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="mb-4 grid grid-cols-2 gap-4 pt-4 text-sm md:grid-cols-4">
        <div>
          <h2 class="pb-2 font-bold">Our offers</h2>
          <ul>
            <li>
              <a class="inline-block py-1" href="/products/">View catalog</a>
            </li>
            <li>
              <a class="inline-block pt-1" href="/financing/"
                >Sell First, Pay Later</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="pb-2 font-bold">Information</h2>
          <ul>
            <li>
              <a class="inline-block py-1" href="/why-qogita/">Why Qogita</a>
            </li>
            <li>
              <a class="inline-block py-1" href="/buyer-information/">Buyers</a>
            </li>
            <li>
              <a class="inline-block pt-1" href="https://sellers.qogita.com/"
                >Sellers</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="pb-2 font-bold">Support</h2>
          <ul>
            <li>
              <a
                href="https://help.qogita.com/hc/en-gb"
                class="inline-block py-1"
                >Help</a
              >
            </li>
            <li><a class="inline-block py-1" href="/contact/">Contact</a></li>
            <li>
              <a href="https://developers.qogita.com/" class="inline-block pt-1"
                >Developers</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h2 class="pb-2 font-bold">Company</h2>
          <ul>
            <li>
              <a class="inline-block py-1" href="/about-qogita/">About</a>
            </li>
            <li><a class="inline-block py-1" href="/careers/">Careers</a></li>
            <li>
              <a href="https://status.qogita.com" class="block pt-1"
                ><div class="flex items-center">
                  <span class="mr-2">System status</span>
                  <div class="relative h-2 w-2">
                    <div
                      class="absolute h-full w-full rounded-full bg-success-300 opacity-75 motion-safe:animate-ping"
                    ></div>
                    <div
                      class="absolute h-full w-full rounded-full bg-success-300"
                    ></div>
                  </div></div
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-2 pt-4 sm:grid-cols-2">
        <small class="block text-sm"
          >©
          <!-- -->2022<!-- -->
          Qogita. All rights reserved.</small
        >
        <ul class="flex divide-x divide-black-300 text-sm sm:justify-end">
          <li>
            <a class="mr-2 inline-block" href="/legal/terms/">Terms of Use</a>
          </li>
          <li>
            <a class="mr-2 ml-2 inline-block" href="/legal/privacy/"
              >Privacy Policy</a
            >
          </li>
          <li>
            <a class="ml-2 inline-block" href="/legal/cookies/">Cookies</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
