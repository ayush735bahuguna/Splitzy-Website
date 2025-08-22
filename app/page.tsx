"use client";
import Head from "next/head";

import splitzy16 from "@/app/assets/splitzy-16.jpg";
import splitzy15 from "@/app/assets/splitzy-15.jpg";
import splitzy1 from "@/app/assets/splitzy-1.jpg";
import splitzy2 from "@/app/assets/splitzy-2.jpg";
import splitzy3 from "@/app/assets/splitzy-3.jpg";
import splitzy6 from "@/app/assets/splitzy-6.jpg";
import splitzy13 from "@/app/assets/splitzy-13.jpg";
import splitzy9 from "@/app/assets/splitzy-9.jpg";
import splitzy4 from "@/app/assets/splitzy-4.jpg";
import splitzy7 from "@/app/assets/splitzy-7.jpg";
import splitzy11 from "@/app/assets/splitzy-11.jpg";
import splitzy14 from "@/app/assets/splitzy-14.jpg";
import splitzy10 from "@/app/assets/splitzy-10.jpg";
import splitzy12 from "@/app/assets/splitzy-12.jpg";
import splitzy8 from "@/app/assets/splitzy-8.jpg";
import splitzy17 from "@/app/assets/splitzy-17.jpg";
import splitzy5 from "@/app/assets/splitzy-5.jpg";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";

const Data: StaticImageData[] = [
  splitzy16,
  splitzy15,
  splitzy1,
  splitzy2,
  splitzy3,
  splitzy6,
  splitzy13,
  splitzy9,
  splitzy4,
  splitzy7,
  splitzy11,
  splitzy14,
  splitzy10,
  splitzy12,
  splitzy8,
  splitzy17,
  splitzy5,
];

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Splitzy - Simplify Expense</title>
        <meta
          name="description"
          content="Effortlessly manage group and individual expenses with Splitzi."
        />
      </Head>
      <div className="p-6 text-gray-800 dark:text-gray-200">
        <h1 className="text-3xl font-bold   mb-4">
          Splitzy : Simplify Expenses
        </h1>

        <p className="mb-4">
          💰 <span className="font-semibold">Splitzy</span> is your all-in-one{" "}
          <span className="font-semibold">smart expense manager</span> designed
          to make sharing and tracking money effortless. Whether you’re{" "}
          splitting bills with friends, planning group trips, managing household
          budgets, or just keeping tabs on your own spending — Splitzy ensures
          everything stays{" "}
          <span className="font-semibold">clear, fair, and hassle-free</span>.
        </p>

        <p className="mb-6">
          With an <span className="font-semibold">intuitive design</span>,{" "}
          <span className="font-semibold">offline support</span>, detailed
          reports, and multiple ways to split costs, Splitzy is built for{" "}
          <span className="font-semibold">
            friends, families, colleagues, and travelers
          </span>
          . No more confusion over “who owes what.”
        </p>

        <button
          onClick={() =>
            (window.location.href =
              "https://drive.google.com/drive/folders/12BgX4XCC47JJA-4WNGVFculIYF-ssWwx")
          }
          className="
    bg-zinc-100 text-zinc-900 
    hover:bg-zinc-100/80 
    dark:bg-zinc-800 dark:text-zinc-50 
    dark:hover:bg-zinc-800/80 
    rounded-md 
    px-4 py-2 mb-4
    text-sm font-medium 
    focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 
    dark:focus:ring-zinc-300 dark:ring-offset-zinc-950
    transition-colors
    disabled:pointer-events-none disabled:opacity-50
  "
        >
          Downlod app
        </button>

        <h2 className="text-2xl font-semibold">📸 Screenshots</h2>
        <div className="flex items-center justify-center flex-col mt-10:bg-slate-900 py-5 rounded-md">
          <div
            id="scrollbar"
            ref={containerRef}
            className="flex-shrink-0 flex md:w-full max-md:w-full max-sm:mx-2 overflow-y-hidden overflow-x-scroll"
          >
            {Data.map((e: StaticImageData, i: number) => {
              return (
                <div
                  key={i}
                  ref={slideRef}
                  className="w-[220px] h-auto flex items-center justify-between flex-col m-2 flex-shrink-0 relative"
                >
                  <Image
                    src={e}
                    blurDataURL={e?.blurDataURL}
                    alt=""
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex gap-5 my-5">
            <button
              className="text-2xl flex items-center justify-center rounded-full w-[45px] h-[45px] bg-slate-500 active:bg-slate-500/65"
              onClick={() => {
                const slideWidth = slideRef?.current?.clientWidth;
                const container = containerRef?.current;
                if (slideWidth !== undefined && container) {
                  container.scrollLeft -= slideWidth;
                }
              }}
            >
              &larr;
            </button>
            <button
              className="text-2xl flex items-center justify-center rounded-full w-[45px] h-[45px] bg-slate-500 active:bg-slate-500/65"
              onClick={() => {
                const slideWidth = slideRef?.current?.clientWidth;
                const container = containerRef?.current;
                if (slideWidth !== undefined && container) {
                  container.scrollLeft += slideWidth;
                }
              }}
            >
              &rarr;
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold   mb-3">✨ Key Features</h2>
        <ul className="list-disc pl-5 mb-5">
          <li>
            <b>Expense Management</b>
            <ul className="list-disc pl-5">
              <li>
                Track <b>group, personal, and one-on-one expenses</b> with
                dedicated tabs.
              </li>
              <li>
                Record and manage spendings across{" "}
                <b>friends, roommates, office, and trips</b>.
              </li>
            </ul>
          </li>

          <li>
            <b>Flexible Splitting & Settlements</b>
            <ul className="list-disc pl-5">
              <li>
                Split expenses{" "}
                <b>
                  equally, by percentage, by shares, or custom contributions
                </b>
                .
              </li>
              <li>
                Supports <b>single or multiple payers</b> in a transaction.
              </li>
              <li>
                Log payments between users and <b>auto-adjust balances</b>{" "}
                instantly.
              </li>
            </ul>
          </li>

          <li>
            <b>Offline-First Support</b>
            <ul className="list-disc pl-5">
              <li>
                <b>Add and manage expenses</b> without internet connectivity.
              </li>
              <li>
                <b>Automatic synchronization</b> when online to keep data
                updated.
              </li>
            </ul>
          </li>

          <li>
            <b>Insights & Reports</b>
            <ul className="list-disc pl-5">
              <li>
                View detailed <b>daily, monthly, and yearly statistics</b>.
              </li>
              <li>Interactive charts for better visualization of spending.</li>
              <li>
                Export professional <b>PDF reports</b> for sharing and
                record-keeping.
              </li>
            </ul>
          </li>

          <li>
            <b>Notifications & Activity Tracking</b>
            <ul className="list-disc pl-5">
              <li>
                Receive alerts for{" "}
                <b>new expenses, settlements, and payments</b>.
              </li>
              <li>
                Option to <b>enable/disable notifications</b> as needed.
              </li>
              <li>
                Maintain a detailed <b>activity history</b> with logs and
                contextual comments.
              </li>
            </ul>
          </li>

          <li>
            <b>User Management</b>
            <ul className="list-disc pl-5">
              <li>
                Add new users quickly via <b>QR code scanning</b>.
              </li>
            </ul>
          </li>

          <li>
            <b>Security & Privacy</b>
            <ul className="list-disc pl-5">
              <li>
                Protect data with <b>app lock</b> for additional authentication.
              </li>
              <li>
                Enable <b>Google authentication and email sign-in</b> for secure
                login.
              </li>
            </ul>
          </li>

          <li>
            <b>Modern Interface</b>
            <ul className="list-disc pl-5">
              <li>
                Upgraded, <b>intuitive UI</b> for a better user experience.
              </li>
              <li>
                <b>Dark mode support</b> for comfortable usage anytime.
              </li>
            </ul>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold   mb-3">🔧 Powered By</h2>
        <p className="mb-6">
          Built using{" "}
          <b>React Native, TypeScript, Tailwind CSS, Firebase, Expo</b> and{" "}
          <b>Reanimated</b>, Splitzy ensures a fast, secure, and reliable
          experience.
        </p>

        <h2 className="text-2xl font-semibold   mb-3">
          🚀 Why Choose Splitzy?
        </h2>
        <p className="mb-6">
          No more awkward money conversations. From splitting dinner with
          friends to managing trips or office expenses — Splitzy provides the
          smartest way to{" "}
          <b>simplify shared expenses, stay transparent, and stress-free</b>.
        </p>

        <p className="text-lg font-semibold text-center mt-4 pt-4 border-t border-slate-500">
          🔹 Split Bills. Track Expenses. Stay Organized.
          <br /> Download <b>Splitzy</b> today!
        </p>
      </div>
    </div>
  );
};

export default Page;
