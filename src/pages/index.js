import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            {/* ---- TO BEGIN, delete this section and GET CODING!!! ---- */}
            <center className="grid place-items-center mt-10">
                <h1 className="text-5xl">Lets build Amazon 2.0</h1>
                <h2>Shazad</h2>
                <br />
                <h3 className="font-bold">
                    We will be using Next.js / Tailwind CSS / Redux / Firebase /
                    NextAuth
                </h3>
                <i>(Dont worry, its all setup and ready to use!)</i>
                <h4>Get Ready, Get Set, GO!!!</h4>

                <h5 className="mb-10">#SHAZAD</h5>

                <div className="bg-red-300 p-10">
                    <p className="font-bold">
                        Dont forget to complete the challenge!
                    </p>
                    <p>👇👇👇</p>
                    <a
                        href="https://www.shazadhoang.me"
                        className="text-blue-400 underline p-3 font-bold"
                    >
                        Shazad
                    </a>
                </div>

                <p className="mt-24">Built with 💙 by Shazad</p>
            </center>
            {/* ---- ---- */}
        </div>
    );
}
