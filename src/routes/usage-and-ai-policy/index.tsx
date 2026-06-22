// All policy copy lives here so wording is editable without touching markup.
const SECTIONS: { heading: string; body?: string; list?: string[] }[] = [
  {
    heading: "Identity",
    body: 'This policy is published by Ryland (the "Artist"), an independent recording artist based in Los Angeles, CA.',
  },
  {
    heading: "Copyright",
    body: 'All music, audio recordings, compositions, lyrics, and stems are © Ryland (the "Artist"). All rights reserved.',
  },
  {
    heading: "Permitted Use",
    body: "The Artist's music may be used for personal, non-commercial listening, or as explicitly licensed in writing by the Artist.",
  },
  {
    heading: "No AI / ML Grant",
    body: "No permission is granted to use the Artist's music for training, fine-tuning, evaluation, or dataset creation of any kind.",
  },
  {
    heading: "Prohibited Uses",
    body: "You may NOT:",
    list: [
      "Include the Artist's audio in any AI or machine learning dataset.",
      "Use the Artist's audio to train, fine-tune, or evaluate any AI or machine learning model.",
      'Build tools or services that generate music "in the style of" Ryland or imitate the Artist\'s sound, voice, or production.',
    ],
  },
  {
    heading: "Licensing",
    body: "Any license granted by the Artist excludes AI and machine learning rights unless those rights are explicitly stated in writing.",
  },
  {
    heading: "Inquiries",
    body: "Research and technology use requires written approval. Direct all inquiries to Ryland's management at weareryland@gmail.com.",
  },
  {
    heading: "Agreement",
    body: "Accessing, streaming, or downloading the Artist's music implies agreement with this policy. Unauthorized use may violate the Artist's rights and applicable law.",
  },
];

// Render the body, linking the management email where it appears.
const Body = ({ text }: { text: string }) => {
  const email = "weareryland@gmail.com";
  if (!text.includes(email)) return <>{text}</>;
  const [before, after] = text.split(email);
  return (
    <>
      {before}
      <a
        href={`mailto:${email}`}
        className="text-orange-400 underline underline-offset-4"
      >
        {email}
      </a>
      {after}
    </>
  );
};

const UsageAndAiPolicy = () => (
  <div className="max-w-3xl mx-auto bg-black/60 backdrop-blur-sm rounded-lg p-6 md:p-10 text-white">
    <header className="border-b border-white/20 pb-6 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold">Usage &amp; AI Policy</h1>
      <p className="mt-2 text-white/70">
        How Ryland's music may and may not be used.
      </p>
    </header>

    <div className="md:columns-2 md:gap-10 space-y-8">
      {SECTIONS.map(({ heading, body, list }) => (
        <section key={heading} className="break-inside-avoid">
          <h2 className="text-xl font-semibold text-orange-400 mb-2">
            {heading}
          </h2>
          {body && (
            <p className="text-white/90">
              <Body text={body} />
            </p>
          )}
          {list && (
            <ul className="mt-2 list-disc list-inside space-y-1 text-white/90">
              {list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  </div>
);

export default UsageAndAiPolicy;
