/* ==================================================================
   Content for every inner service page.

   - The key is the last part of the URL: /services/<key>
     It must match the `href` of the service in servicesMenu
     (ServicesMegaMenu.jsx).
   - Wrap words in *asterisks* inside a hero/about/portfolio/faq
     `title` to make them bold italic, like the rest of the site.
   - `about.image` paths are placeholders. Swap in your own images.
   ================================================================== */

export const servicePages = {
  /* ---------------------------------------------------------------- */
  /*  CREATION & PUBLISHING                                           */
  /* ---------------------------------------------------------------- */
  "writing-storytelling": {
    name: "Writing & Storytelling",
    category: "Creation & Publishing",
    seo: {
      title: "Children’s Book Writing & Storytelling Services",
      description: "Professional children’s book writers who turn your idea into a story kids want to read again and again.",
    },
    hero: {
      badge: "Writing & Storytelling",
      title: "Turn Your Idea Into a *Story Kids Love*",
      description: "Our children’s authors shape your idea into a story with the rhythm, heart and humor young readers come back to night after night.",
    },
    about: {
      badge: "About This Service",
      title: "Stories Written for *Little Readers*",
      description: [
        "Writing for children is its own craft. Every word has to earn its place, every page has to move the story forward, and the ending has to land for a five-year-old and the adult reading aloud.",
        "You bring the idea, a character, a lesson or just a feeling. We plan the story with you, write it in your voice and revise until it feels like yours.",
      ],
      points: ["Picture books, early readers and chapter books", "Written in your voice, you keep all rights", "Unlimited revisions until you’re happy"],
      image: "/images/services/writing.png",
    },
    portfolio: {
      title: "Stories We’ve *Written*",
      description: "A few of the books our writers have brought to life for authors like you.",
    },
    faq: {
      title: "Writing *Questions*",
      items: [
        { question: "Do I need a full story before I start?", answer: "No. Many authors come to us with a single idea or a character. We help you shape it into a full story outline before any writing begins." },
        { question: "Will the book sound like me?", answer: "Yes. We start with a call to learn how you speak and what matters to you, then write in your voice. You review every draft." },
        { question: "Who owns the story?", answer: "You do. You keep 100% of the rights and royalties, and your name goes on the cover." },
        { question: "How long does writing take?", answer: "A picture book usually takes 2 to 4 weeks. Chapter books and middle grade novels take longer depending on length." },
      ],
    },
  },

  "editing-proofreading": {
    name: "Editing & Proofreading",
    category: "Creation & Publishing",
    seo: {
      title: "Children’s Book Editing & Proofreading Services",
      description: "Editors who make sure your children’s book reads clearly, fits its age group and is free of errors before print.",
    },
    hero: {
      badge: "Editing & Proofreading",
      title: "Polish Your Story *Page by Page*",
      description: "Our editors tighten your story, check it reads right for its age group and catch every typo before it goes to print.",
    },
    about: {
      badge: "About This Service",
      title: "Editing That Keeps *Your Voice*",
      description: [
        "A good edit makes your story clearer without making it sound like someone else wrote it. We look at pacing, word choice and reading level so young readers stay with you to the last page.",
        "Proofreading is the final pass. We check spelling, punctuation and consistency so nothing distracts from the story once it’s printed.",
      ],
      points: ["Developmental, line and copy editing", "Reading-level checks for each age group", "Tracked changes so you see every edit"],
      image: "/images/services/editing.png",
    },
    portfolio: {
      title: "Books We’ve *Edited*",
      description: "Manuscripts we’ve helped polish and prepare for publishing.",
    },
    faq: {
      title: "Editing *Questions*",
      items: [
        { question: "What’s the difference between editing and proofreading?", answer: "Editing improves the story itself, its structure, pacing and wording. Proofreading is the final check for typos and small errors." },
        { question: "Will you rewrite my book?", answer: "No. We suggest changes and explain why. You decide what to keep." },
        { question: "Can you check my book is right for its age group?", answer: "Yes. We check vocabulary, sentence length and themes against the age range you’re writing for." },
        { question: "How will I receive the edits?", answer: "You’ll get a Word document with tracked changes and comments, plus a short summary of our main suggestions." },
      ],
    },
  },

  "formatting-ebooks": {
    name: "Formatting & eBooks",
    category: "Creation & Publishing",
    seo: {
      title: "Children’s Book Formatting & eBook Conversion",
      description: "Print-ready layouts and eBook files for Kindle, Apple Books and more, set up for children’s books with illustrations.",
    },
    hero: {
      badge: "Formatting & eBooks",
      title: "Print-Ready Pages and *eBooks* That Work",
      description: "We lay out your text and illustrations for print and convert your book into eBook files for Kindle, Apple Books and every major store.",
    },
    about: {
      badge: "About This Service",
      title: "Your Book, *Ready to Publish*",
      description: [
        "Children’s books mix text and art on every page, which makes formatting harder than a novel. We place each line so it’s easy to read and never covers an important part of the illustration.",
        "For eBooks, we build fixed-layout files that keep your pages looking exactly as designed on tablets and phones.",
      ],
      points: ["Print files for paperback and hardcover", "Fixed-layout eBooks for Kindle and Apple Books", "Files that pass store checks the first time"],
      image: "/images/services/formatting.png",
    },
    portfolio: {
      title: "Books We’ve *Formatted*",
      description: "Print and digital editions we’ve prepared for publishing.",
    },
    faq: {
      title: "Formatting *Questions*",
      items: [
        { question: "Which file types will I get?", answer: "Print-ready PDFs for your printer or Amazon KDP, plus EPUB and KPF files for eBook stores." },
        { question: "Can you format a book someone else illustrated?", answer: "Yes. Send us your text and high-resolution illustrations and we’ll handle the layout." },
        { question: "Will my eBook look the same as the print book?", answer: "Yes. We use fixed-layout eBooks so each page looks just like the printed version." },
        { question: "What if the store rejects my files?", answer: "We fix and resend them at no extra cost until they’re approved." },
      ],
    },
  },

  "publishing-isbn": {
    name: "Publishing & ISBN",
    category: "Creation & Publishing",
    seo: {
      title: "Children’s Book Publishing, ISBN & Copyright",
      description: "We handle ISBN registration, copyright and Amazon KDP setup so your children’s book is published correctly.",
    },
    hero: {
      badge: "Publishing & ISBN",
      title: "Publish Your Book *the Right Way*",
      description: "We register your ISBN and copyright, set up your publishing accounts and get your book live, while you keep every right and royalty.",
    },
    about: {
      badge: "About This Service",
      title: "We Handle the *Paperwork*",
      description: [
        "Publishing comes with accounts, forms and rules that can stall a finished book for weeks. We take care of them so your book goes live without the guesswork.",
        "Everything is set up in your name. You own the ISBN, the copyright and the publishing account, and every royalty goes straight to you.",
      ],
      points: ["ISBN and barcode registration", "Copyright registration support", "Amazon KDP and IngramSpark setup"],
      image: "/images/services/publishing.png",
    },
    portfolio: {
      title: "Books We’ve *Published*",
      description: "Titles we’ve helped authors publish and launch.",
    },
    faq: {
      title: "Publishing *Questions*",
      items: [
        { question: "Do I need an ISBN?", answer: "You need one to sell in bookstores and libraries. Amazon offers a free one, but it lists Amazon as the publisher, so most authors buy their own." },
        { question: "Who owns the publishing account?", answer: "You do. We set it up in your name and hand over full access." },
        { question: "Do you take a share of my royalties?", answer: "No. You keep 100% of your royalties." },
        { question: "How long until my book is live?", answer: "Usually 1 to 2 weeks once your files are final, depending on store review times." },
      ],
    },
  },

  distribution: {
    name: "Distribution & Global Reach",
    category: "Creation & Publishing",
    seo: {
      title: "Children’s Book Distribution Worldwide",
      description: "Get your children’s book into online stores, bookshops and libraries around the world.",
    },
    hero: {
      badge: "Distribution & Global Reach",
      title: "Put Your Book *on Shelves Worldwide*",
      description: "We list your book with online stores, bookshops and library suppliers so readers can find it wherever they shop.",
    },
    about: {
      badge: "About This Service",
      title: "One Book, *Many Stores*",
      description: [
        "Amazon is only one place parents buy books. We distribute your book through networks that reach thousands of retailers, bookshops and libraries worldwide.",
        "We set prices for each market and make sure your book shows up correctly in every catalog it’s listed in.",
      ],
      points: ["Amazon, Barnes & Noble, Apple Books and more", "Bookstore and library catalog listings", "Pricing set for each country"],
      image: "/images/services/distribution.png",
    },
    portfolio: {
      title: "Books We’ve *Distributed*",
      description: "Titles now available in stores and libraries around the world.",
    },
    faq: {
      title: "Distribution *Questions*",
      items: [
        { question: "Which stores will my book be in?", answer: "Major online stores like Amazon, Barnes & Noble and Apple Books, plus the catalogs bookstores and libraries order from." },
        { question: "Will bookstores stock my book?", answer: "Listing makes your book available to order. For stores to stock it, see our Bookstore & Library Promotion service." },
        { question: "Can I sell in other countries?", answer: "Yes. We set up pricing for each market where your book will be sold." },
        { question: "How are royalties paid?", answer: "Each platform pays you directly into your own account." },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  /*  ILLUSTRATION & DESIGN                                           */
  /* ---------------------------------------------------------------- */
  "book-illustration": {
    name: "Book Illustration",
    category: "Illustration & Design",
    seo: {
      title: "Children’s Book Illustration Services",
      description: "Hand-painted or digital children’s book illustrations in the art style your story needs.",
    },
    hero: {
      badge: "Book Illustration",
      title: "Artwork That Makes *Every Page Shine*",
      description: "Our illustrators create hand-painted or digital artwork for every page, in the style that fits your story.",
    },
    about: {
      badge: "About This Service",
      title: "Pictures That *Tell the Story*",
      description: [
        "In a children’s book, the illustrations do half the storytelling. Our artists read your manuscript closely and plan each spread so the pictures add to the words.",
        "You choose from a range of styles, from soft watercolor to bold digital art, and see sketches before any final artwork is painted.",
      ],
      points: ["Watercolor, digital, cartoon and realistic styles", "Sketch approval before final art", "Full commercial rights to all artwork"],
      image: "/images/services/illustration.png",
    },
    portfolio: {
      title: "Our *Illustration* Work",
      description: "Browse styles from books our illustrators have brought to life.",
    },
    faq: {
      title: "Illustration *Questions*",
      items: [
        { question: "Can I choose the art style?", answer: "Yes. We share style samples at the start and you pick the one that fits your story best." },
        { question: "Will I see the art before it’s finished?", answer: "Yes. You approve rough sketches for every page before we move to final color." },
        { question: "How many illustrations does a picture book need?", answer: "Most picture books have 12 to 16 spreads, plus the cover. We’ll recommend a number based on your story." },
        { question: "Who owns the illustrations?", answer: "You do. You receive full commercial rights to use the artwork anywhere." },
      ],
    },
  },

  "character-design": {
    name: "Character Design",
    category: "Illustration & Design",
    seo: {
      title: "Children’s Book Character Design",
      description: "Lovable children’s book characters designed to look the same on every page.",
    },
    hero: {
      badge: "Character Design",
      title: "Characters Kids *Can’t Forget*",
      description: "We design lovable characters with a look and personality that stays consistent on every page and every book in your series.",
    },
    about: {
      badge: "About This Service",
      title: "Faces Readers *Fall For*",
      description: [
        "Kids remember characters long after they forget the plot. We design yours from personality first, so their look, expressions and poses all feel true to who they are.",
        "You get a character sheet with turnarounds and expressions that any illustrator can follow, which keeps your character the same across books, toys and merchandise.",
      ],
      points: ["Front, side and back turnarounds", "Expression and pose sheets", "Ready for series, toys and merchandise"],
      image: "/images/services/character-design.png",
    },
    portfolio: {
      title: "Characters We’ve *Created*",
      description: "A gallery of characters designed for authors and their stories.",
    },
    faq: {
      title: "Character Design *Questions*",
      items: [
        { question: "What do I need to share to get started?", answer: "A description of your character’s personality, age and any must-have details. Reference images help but aren’t required." },
        { question: "How many design options will I see?", answer: "We start with three concepts. You pick one and we refine it with you." },
        { question: "What’s a character sheet?", answer: "A guide showing your character from every angle with different expressions, so they look the same in every illustration." },
        { question: "Can I use the character on merchandise?", answer: "Yes. You own the design and can use it on toys, clothing and anything else." },
      ],
    },
  },

  "cover-interior-design": {
    name: "Cover & Interior Design",
    category: "Illustration & Design",
    seo: {
      title: "Children’s Book Cover & Interior Design",
      description: "Book covers that stand out on the shelf and on Amazon, with interiors designed to match.",
    },
    hero: {
      badge: "Cover & Interior Design",
      title: "A Cover That *Gets Picked Up*",
      description: "We design covers that stand out on the shelf and in Amazon search results, with interior pages laid out to match.",
    },
    about: {
      badge: "About This Service",
      title: "Judged *by Its Cover*",
      description: [
        "Parents decide in seconds whether to pick up a book. Your cover needs a clear title, a strong image and a look that tells them exactly who it’s for.",
        "We design the front, spine and back cover, then carry the same fonts and style through the interior so the whole book feels like one piece.",
      ],
      points: ["Front, spine and back cover", "Matching title page and interior style", "Thumbnails tested for Amazon search"],
      image: "/images/services/cover-design.png",
    },
    portfolio: {
      title: "Covers We’ve *Designed*",
      description: "Covers and interiors from books on shelves today.",
    },
    faq: {
      title: "Cover Design *Questions*",
      items: [
        { question: "Can you use my existing illustrations on the cover?", answer: "Yes. We can design around your artwork or create new cover art." },
        { question: "How many cover concepts will I get?", answer: "Two to three concepts to start, then revisions on the one you choose." },
        { question: "Do you design the back cover too?", answer: "Yes. Front, spine and back are included, sized for your printer." },
        { question: "Will the cover work as a small thumbnail?", answer: "Yes. We check every cover at Amazon thumbnail size so the title stays readable." },
      ],
    },
  },

  "print-ebook-design": {
    name: "Print & eBook Design",
    category: "Illustration & Design",
    seo: {
      title: "Print & eBook Design for Children’s Books",
      description: "Children’s book files set up for hardcover, paperback and every eBook format.",
    },
    hero: {
      badge: "Print & eBook Design",
      title: "One Design, *Every Format*",
      description: "We set up your book for hardcover, paperback and eBook, so it looks right whether it’s held in small hands or read on a tablet.",
    },
    about: {
      badge: "About This Service",
      title: "Built for *Print and Screen*",
      description: [
        "Each format has its own rules for page size, bleed, color and resolution. Getting them wrong can mean blurry art or text cut off at the edge of the page.",
        "We prepare every version to your printer’s and each store’s exact specs, so your book looks as good in print as it does on screen.",
      ],
      points: ["Hardcover, paperback and board book setups", "Color-checked files for print", "eBook versions for every major store"],
      image: "/images/services/print-design.png",
    },
    portfolio: {
      title: "Books in *Every Format*",
      description: "Print and digital editions we’ve designed.",
    },
    faq: {
      title: "Print & eBook *Questions*",
      items: [
        { question: "What trim size should my book be?", answer: "It depends on your book type and printer. We’ll recommend a size that suits your story and keeps printing costs sensible." },
        { question: "Why does my art look different in print?", answer: "Screens and paper show color differently. We convert and check your files so print colors stay close to the original." },
        { question: "Can you make a board book version?", answer: "Yes. We can adapt your design for board books with thicker pages and simpler layouts." },
        { question: "Do I get the source files?", answer: "Yes. You receive the final print and eBook files, plus the editable design files." },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  /*  ANIMATION                                                       */
  /* ---------------------------------------------------------------- */
  animation: {
    name: "2D & 3D Animation",
    category: "Animation",
    seo: {
      title: "2D & 3D Animation for Children’s Books",
      description: "Bring your children’s book characters to life with smooth, colorful 2D and 3D animation.",
    },
    hero: {
      badge: "2D & 3D Animation",
      title: "Watch Your Characters *Come Alive*",
      description: "We animate your characters in smooth, colorful 2D or 3D, ready for videos, social media and your author website.",
    },
    about: {
      badge: "About This Service",
      title: "From Page *to Screen*",
      description: [
        "Kids today meet stories on screens as often as on paper. Animation lets your characters move, talk and reach readers on YouTube, social media and in classrooms.",
        "We build animations from your existing illustrations, so the characters on screen look exactly like the ones in your book.",
      ],
      points: ["2D and 3D animation styles", "Built from your book’s illustrations", "Voiceover and music included"],
      image: "/images/services/animation.png",
    },
    portfolio: {
      title: "Our *Animation* Work",
      description: "Characters and stories we’ve brought to life on screen.",
    },
    faq: {
      title: "Animation *Questions*",
      items: [
        { question: "Should I choose 2D or 3D?", answer: "2D stays closest to your book’s illustrations. 3D adds depth and works well for series and toys. We’ll help you decide." },
        { question: "How long can the animation be?", answer: "Anything from a 15-second social clip to a full animated story. We quote based on length." },
        { question: "Do you add voices and music?", answer: "Yes. Voiceover, music and sound effects are included." },
        { question: "Where can I use the animation?", answer: "Anywhere: YouTube, social media, your website, school visits and presentations." },
      ],
    },
  },

  "book-trailers": {
    name: "Book Trailers",
    category: "Animation",
    seo: {
      title: "Children’s Book Trailers",
      description: "Short animated videos that tease your children’s book on social media and Amazon.",
    },
    hero: {
      badge: "Book Trailers",
      title: "A Trailer That *Sells the Story*",
      description: "Short, animated videos that tease your book and get parents clicking on social media and Amazon.",
    },
    about: {
      badge: "About This Service",
      title: "30 Seconds *to Hook Readers*",
      description: [
        "A book trailer shows parents what your story feels like before they buy. It’s one of the easiest ways to stand out in a social feed.",
        "We script, animate and edit the trailer from your illustrations, then deliver versions sized for every platform.",
      ],
      points: ["Script, animation and editing", "Sized for Instagram, TikTok, YouTube and Amazon", "Music and voiceover included"],
      image: "/images/services/book-trailers.png",
    },
    portfolio: {
      title: "Trailers We’ve *Made*",
      description: "Watch trailers we’ve created for children’s books.",
    },
    faq: {
      title: "Book Trailer *Questions*",
      items: [
        { question: "How long is a book trailer?", answer: "Usually 30 to 60 seconds. We also make short cuts for reels and stories." },
        { question: "Can I add it to my Amazon page?", answer: "Yes. We deliver a version that meets Amazon’s video requirements." },
        { question: "Do you write the script?", answer: "Yes. We write it from your book and send it for approval before animating." },
        { question: "What if I don’t have illustrations yet?", answer: "We can create artwork for the trailer, or pair it with our illustration service." },
      ],
    },
  },

  audiobooks: {
    name: "Audiobooks & Voiceovers",
    category: "Animation",
    seo: {
      title: "Children’s Audiobooks & Voiceovers",
      description: "Professional narrators and character voices for children’s audiobooks.",
    },
    hero: {
      badge: "Audiobooks & Voiceovers",
      title: "A Story That *Sounds as Good as It Reads*",
      description: "Professional narrators and character voices that bring your book to life for listening at bedtime, in the car or in class.",
    },
    about: {
      badge: "About This Service",
      title: "Stories Made *for Listening*",
      description: [
        "Many kids hear stories before they can read them. An audiobook lets your book reach them anywhere, with a warm voice that makes every character distinct.",
        "You choose the narrator from auditions. We handle recording, editing and mastering to the standards Audible and other platforms require.",
      ],
      points: ["Kid-friendly narrators you choose from auditions", "Character voices, music and sound effects", "Ready for Audible, Apple and Spotify"],
      image: "/images/services/audiobooks.png",
    },
    portfolio: {
      title: "Listen to *Our Work*",
      description: "Samples from audiobooks we’ve produced.",
    },
    faq: {
      title: "Audiobook *Questions*",
      items: [
        { question: "Can I choose the narrator?", answer: "Yes. We send auditions from several narrators and you pick the voice you like best." },
        { question: "Can I narrate it myself?", answer: "Yes. We can coach and record you, then edit and master the audio." },
        { question: "Where will my audiobook be sold?", answer: "We prepare files for Audible, Apple Books, Spotify and other major platforms." },
        { question: "Do you add music and sound effects?", answer: "Yes, if you’d like them. They work especially well for younger listeners." },
      ],
    },
  },

  "interactive-ebooks": {
    name: "Interactive eBooks",
    category: "Animation",
    seo: {
      title: "Interactive eBooks for Children",
      description: "Tap-to-play children’s eBooks with sound, animation and read-along highlighting.",
    },
    hero: {
      badge: "Interactive eBooks",
      title: "Books Kids Can *Tap, Play and Read*",
      description: "Tap-to-play pages with sound, animation and read-along highlighting that keep young readers turning pages.",
    },
    about: {
      badge: "About This Service",
      title: "Reading That *Feels Like Play*",
      description: [
        "Interactive eBooks turn reading into something kids want to do. Characters move when tapped, words light up as they’re read aloud, and hidden surprises reward curious readers.",
        "We keep every interaction tied to the story, so the fun supports reading instead of distracting from it.",
      ],
      points: ["Tap-to-play animations and sounds", "Read-along word highlighting", "Works on tablets and phones"],
      image: "/images/services/interactive-ebooks.png",
    },
    portfolio: {
      title: "Interactive Books *We’ve Built*",
      description: "Try pages from interactive eBooks we’ve created.",
    },
    faq: {
      title: "Interactive eBook *Questions*",
      items: [
        { question: "Which devices do interactive eBooks work on?", answer: "Most tablets and phones, including iPad and Android devices." },
        { question: "Can it read the story aloud?", answer: "Yes. We add narration with words that highlight as they’re read." },
        { question: "Where can I sell it?", answer: "Through Apple Books and as a standalone app or web book, depending on the features you choose." },
        { question: "Can I turn my printed book into an interactive one?", answer: "Yes. We build it from your existing text and illustrations." },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  /*  MARKETING                                                       */
  /* ---------------------------------------------------------------- */
  "amazon-marketing": {
    name: "Amazon Book Marketing",
    category: "Marketing",
    seo: {
      title: "Amazon Marketing for Children’s Books",
      description: "Optimized Amazon listings, keywords and ads that help parents find your children’s book.",
    },
    hero: {
      badge: "Amazon Book Marketing",
      title: "Get Found *on Amazon*",
      description: "Optimized listings, keywords and ads that put your book in front of parents searching for their next bedtime story.",
    },
    about: {
      badge: "About This Service",
      title: "Rank Higher, *Sell More*",
      description: [
        "Most children’s books on Amazon are never seen because they don’t show up in search. We fix that with the right categories, keywords and a listing that convinces parents to buy.",
        "Then we run and manage Amazon ads, adjusting them weekly so your budget goes to the searches that actually sell books.",
      ],
      points: ["Keyword and category research", "Book description and A+ Content", "Managed Amazon ad campaigns"],
      image: "/images/services/amazon-marketing.png",
    },
    portfolio: {
      title: "Amazon *Success Stories*",
      description: "Books we’ve helped climb the Amazon rankings.",
    },
    faq: {
      title: "Amazon Marketing *Questions*",
      items: [
        { question: "How soon will I see results?", answer: "Listing improvements can help within days. Ads usually need 2 to 4 weeks to find what works best." },
        { question: "What budget do I need for ads?", answer: "You can start small. We’ll recommend a daily budget based on your goals." },
        { question: "What is A+ Content?", answer: "Extra images and text on your Amazon page that show off your illustrations and help parents decide to buy." },
        { question: "Do I need to give you my Amazon login?", answer: "No. You can add us as a user with limited access to your ad account." },
      ],
    },
  },

  "book-launch": {
    name: "Book Launch & Promotion",
    category: "Marketing",
    seo: {
      title: "Children’s Book Launch & Promotion",
      description: "Pre-orders, early reviews and launch-week promotion for children’s books.",
    },
    hero: {
      badge: "Book Launch & Promotion",
      title: "Launch Your Book *With a Bang*",
      description: "We plan your launch from pre-orders to early reviews, so your book starts strong from day one.",
    },
    about: {
      badge: "About This Service",
      title: "A Launch *Worth Celebrating*",
      description: [
        "The first weeks after release decide how visible your book becomes. A planned launch builds early sales and reviews, which helps stores show your book to more readers.",
        "We set up pre-orders, send early copies to reviewers and run a launch-week campaign across email, social media and Amazon.",
      ],
      points: ["Pre-order setup and promotion", "Early reviewer outreach", "Launch-week campaign plan"],
      image: "/images/services/book-launch.png",
    },
    portfolio: {
      title: "Launches We’ve *Run*",
      description: "Books we’ve helped launch to their first readers.",
    },
    faq: {
      title: "Launch *Questions*",
      items: [
        { question: "When should I start planning my launch?", answer: "Ideally 6 to 8 weeks before release, so there’s time for pre-orders and early reviews." },
        { question: "How do you get early reviews?", answer: "We send advance copies to readers, parents and book bloggers who review children’s books." },
        { question: "Can you help if my book is already out?", answer: "Yes. We can run a relaunch campaign to give it a fresh push." },
        { question: "What does a launch include?", answer: "Pre-order setup, reviewer outreach, social media content and a launch-week promotion plan." },
      ],
    },
  },

  "social-media-marketing": {
    name: "Social Media Marketing",
    category: "Marketing",
    seo: {
      title: "Social Media Marketing for Children’s Authors",
      description: "Posts and reels that grow your reader community on Instagram, TikTok and Facebook.",
    },
    hero: {
      badge: "Social Media Marketing",
      title: "Grow Your *Reader Community*",
      description: "Posts and reels that reach parents, teachers and fellow book lovers on Instagram, TikTok and Facebook.",
    },
    about: {
      badge: "About This Service",
      title: "Where Parents *Find Books*",
      description: [
        "Parents and teachers discover new children’s books on social media every day. Consistent, eye-catching posts keep your book in front of them.",
        "We create content from your illustrations and story, post on a regular schedule and reply to your growing community.",
      ],
      points: ["Content calendar and posting", "Reels and short videos from your book", "Community replies and engagement"],
      image: "/images/services/social-media.png",
    },
    portfolio: {
      title: "Social Content *We’ve Created*",
      description: "Posts and reels we’ve made for children’s authors.",
    },
    faq: {
      title: "Social Media *Questions*",
      items: [
        { question: "Which platforms do you manage?", answer: "Instagram, TikTok, Facebook and Pinterest. We’ll recommend where your readers spend time." },
        { question: "How often will you post?", answer: "Usually 3 to 5 times a week, depending on your plan." },
        { question: "Do I approve posts first?", answer: "Yes. You see the content calendar in advance and can change anything." },
        { question: "Can you run paid social ads?", answer: "Yes. We can add paid campaigns to reach more parents in your target age group." },
      ],
    },
  },

  "website-email-marketing": {
    name: "Website & Email Marketing",
    category: "Marketing",
    seo: {
      title: "Author Websites & Email Marketing",
      description: "An author website and newsletter that keep readers coming back for your next book.",
    },
    hero: {
      badge: "Website & Email Marketing",
      title: "A Home for *Your Books*",
      description: "An author website and newsletter that keep readers, parents and teachers coming back for your next book.",
    },
    about: {
      badge: "About This Service",
      title: "Readers Who *Stay With You*",
      description: [
        "Social media platforms change, but your website and email list are yours. They’re where readers learn about you, buy your books and hear about what’s next.",
        "We build a site that shows off your books and illustrations, then set up a newsletter that turns visitors into loyal readers.",
      ],
      points: ["Author website design and setup", "Newsletter signup and welcome emails", "Free activity downloads to grow your list"],
      image: "/images/services/website-email.png",
    },
    portfolio: {
      title: "Author Sites *We’ve Built*",
      description: "Websites and newsletters we’ve created for authors.",
    },
    faq: {
      title: "Website & Email *Questions*",
      items: [
        { question: "Can I update the website myself?", answer: "Yes. We build it so you can easily add books, events and posts." },
        { question: "What should my newsletter include?", answer: "Book news, behind-the-scenes art, activity sheets and event dates. We’ll help you plan it." },
        { question: "How do I get people to sign up?", answer: "We set up a free download, like a coloring page, that readers get when they subscribe." },
        { question: "Can I sell books on my website?", answer: "Yes. We can link to stores or set up direct sales for signed copies." },
      ],
    },
  },

  "bookstore-library-promotion": {
    name: "Bookstore & Library Promotion",
    category: "Marketing",
    seo: {
      title: "Bookstore & Library Promotion for Children’s Books",
      description: "We pitch your children’s book to bookstores and libraries so it lands on real shelves.",
    },
    hero: {
      badge: "Bookstore & Library Promotion",
      title: "Get Your Book *on Real Shelves*",
      description: "We pitch your book to independent bookstores, school libraries and public library catalogs.",
    },
    about: {
      badge: "About This Service",
      title: "Where Kids *Discover Books*",
      description: [
        "Many children find their favorite books in libraries and local bookstores. Getting there takes the right listings, a strong sell sheet and direct outreach.",
        "We prepare professional materials for your book and contact the stores and libraries most likely to stock it.",
      ],
      points: ["Sell sheets for buyers and librarians", "Outreach to bookstores and libraries", "Story-time and event pitches"],
      image: "/images/services/bookstore-library.png",
    },
    portfolio: {
      title: "Books *on Shelves*",
      description: "Titles we’ve helped place in bookstores and libraries.",
    },
    faq: {
      title: "Bookstore & Library *Questions*",
      items: [
        { question: "Will bookstores definitely stock my book?", answer: "We can’t promise placement, but professional materials and targeted outreach greatly improve your chances." },
        { question: "What’s a sell sheet?", answer: "A one-page summary of your book with pricing and ordering details that buyers and librarians use to decide." },
        { question: "Do I need to be in a distribution catalog?", answer: "Yes. Stores and libraries order through these catalogs. See our Distribution service." },
        { question: "Can you book readings and events?", answer: "Yes. We pitch story times and author visits to the stores and libraries we contact." },
      ],
    },
  },

  "educational-marketing": {
    name: "Educational Book Marketing",
    category: "Marketing",
    seo: {
      title: "Marketing Children’s Books to Schools & Teachers",
      description: "Reach teachers and schools with classroom-ready outreach for your children’s book.",
    },
    hero: {
      badge: "Educational Book Marketing",
      title: "Bring Your Book *Into Classrooms*",
      description: "We reach teachers, schools and educators with outreach that shows how your book fits their lessons.",
    },
    about: {
      badge: "About This Service",
      title: "Books Teachers *Want to Use*",
      description: [
        "Teachers are always looking for books that make lessons easier to teach and more fun to learn. If your book fits a subject or theme, schools can become your biggest readers.",
        "We match your book to curriculum topics, prepare teacher-friendly materials and reach educators directly.",
      ],
      points: ["Curriculum and theme matching", "Teacher guides and lesson ideas", "Outreach to schools and educators"],
      image: "/images/services/educational-marketing.png",
    },
    portfolio: {
      title: "Books in *Classrooms*",
      description: "Titles we’ve helped bring to teachers and schools.",
    },
    faq: {
      title: "Educational Marketing *Questions*",
      items: [
        { question: "Is my book right for schools?", answer: "If it teaches a skill, explores a theme or supports a subject, it likely is. We’ll review it with you." },
        { question: "Do I need a teacher’s guide?", answer: "It helps a lot. Teachers are more likely to use books with ready-made activities. See our Educational Materials service." },
        { question: "Can you arrange school visits?", answer: "Yes. We pitch in-person and virtual author visits to schools." },
        { question: "Who do you contact?", answer: "Teachers, school librarians and education networks matched to your book’s age group." },
      ],
    },
  },

  /* ---------------------------------------------------------------- */
  /*  CHARACTER BRANDING                                              */
  /* ---------------------------------------------------------------- */
  "author-character-branding": {
    name: "Author & Character Branding",
    category: "Character Branding",
    seo: {
      title: "Author & Character Branding",
      description: "A consistent look, voice and personality for you and your characters across books, your website and social media.",
    },
    hero: {
      badge: "Author & Character Branding",
      title: "A Brand Readers *Recognize*",
      description: "We give you and your characters a consistent look, voice and personality across books, your website and social media.",
    },
    about: {
      badge: "About This Service",
      title: "More Than *One Book*",
      description: [
        "The authors kids remember have a recognizable style. Their characters, colors and voice feel the same in every book, video and post.",
        "We build that brand for you, with a logo, colors, fonts and character guidelines you can use everywhere.",
      ],
      points: ["Author logo and brand colors", "Character style guide", "Brand kit for social media and your website"],
      image: "/images/services/branding.png",
    },
    portfolio: {
      title: "Brands *We’ve Built*",
      description: "Author and character brands we’ve created.",
    },
    faq: {
      title: "Branding *Questions*",
      items: [
        { question: "Do I need a brand for one book?", answer: "If you plan a series or more books, a brand helps readers recognize your work right away." },
        { question: "What’s in a brand kit?", answer: "Your logo, colors, fonts, character guidelines and templates for social media." },
        { question: "Can you brand my existing characters?", answer: "Yes. We build the brand around the characters you already have." },
        { question: "Will the brand work on merchandise?", answer: "Yes. We design it to work on books, screens, toys and clothing." },
      ],
    },
  },

  merchandise: {
    name: "Merchandise & Design",
    category: "Character Branding",
    seo: {
      title: "Children’s Book Merchandise Design",
      description: "Plush toys, apparel and stickers featuring your children’s book characters.",
    },
    hero: {
      badge: "Merchandise & Design",
      title: "Your Characters, *Off the Page*",
      description: "Plush toys, apparel and stickers featuring your characters, designed and ready to produce.",
    },
    about: {
      badge: "About This Service",
      title: "Something Kids *Can Hug*",
      description: [
        "Merchandise turns readers into fans. A plush toy or t-shirt keeps your characters in kids’ lives long after the book is closed, and it’s another way to earn from your work.",
        "We design products from your characters and prepare files for manufacturers or print-on-demand stores.",
      ],
      points: ["Plush toys, t-shirts, stickers and more", "Production-ready design files", "Print-on-demand store setup"],
      image: "/images/services/merchandise.png",
    },
    portfolio: {
      title: "Merchandise *We’ve Designed*",
      description: "Products we’ve created from children’s book characters.",
    },
    faq: {
      title: "Merchandise *Questions*",
      items: [
        { question: "Do you manufacture the products?", answer: "We design them and prepare production files. We can connect you with manufacturers or set up print-on-demand." },
        { question: "What’s print-on-demand?", answer: "Products are made only when someone orders, so you don’t need to buy stock upfront." },
        { question: "Can I sell merchandise at events?", answer: "Yes. We can prepare files for small batch orders for signings and school visits." },
        { question: "Are the designs safe for kids’ products?", answer: "We design to common safety guidelines, but your manufacturer handles product safety testing." },
      ],
    },
  },

  "educational-materials": {
    name: "Educational Materials",
    category: "Character Branding",
    seo: {
      title: "Educational Materials for Children’s Books",
      description: "Worksheets, activity books and lesson plans built around your children’s story.",
    },
    hero: {
      badge: "Educational Materials",
      title: "Learning Built *Around Your Story*",
      description: "Worksheets, activity books and lesson plans that help teachers and parents use your book to teach.",
    },
    about: {
      badge: "About This Service",
      title: "Your Book *in the Classroom*",
      description: [
        "Activities make your book more useful to teachers and parents, and give kids more time with your characters.",
        "We create materials that match your book’s age group and themes, designed in the same style as your illustrations.",
      ],
      points: ["Teacher guides and lesson plans", "Activity books and coloring pages", "Printable worksheets"],
      image: "/images/services/educational-materials.png",
    },
    portfolio: {
      title: "Materials *We’ve Created*",
      description: "Activity books and teaching resources made for children’s books.",
    },
    faq: {
      title: "Educational Materials *Questions*",
      items: [
        { question: "Who writes the activities?", answer: "Our team includes writers with teaching experience who match activities to your book’s age group." },
        { question: "Can I sell the activity book?", answer: "Yes. We can publish it as its own book or offer pages as free downloads." },
        { question: "Will the materials match my book’s style?", answer: "Yes. We use your characters and illustration style throughout." },
        { question: "Can these help with school marketing?", answer: "Yes. Teachers are more likely to use books that come with ready-made activities." },
      ],
    },
  },

  "character-licensing": {
    name: "Character Licensing",
    category: "Character Branding",
    seo: {
      title: "Children’s Book Character Licensing",
      description: "Turn your children’s book characters into a brand with licensing deals for toys, media and products.",
    },
    hero: {
      badge: "Character Licensing",
      title: "Grow Your Characters *Beyond the Book*",
      description: "We help you turn your characters into a brand with licensing deals for toys, media and products.",
    },
    about: {
      badge: "About This Service",
      title: "Your Characters, *Your Brand*",
      description: [
        "Licensing lets other companies use your characters on their products while you earn a share of the sales. It’s how beloved book characters end up on toys, shows and clothing.",
        "We prepare your characters for licensing, put together a pitch package and help you approach companies that fit your brand.",
      ],
      points: ["Licensing-ready character guide", "Pitch package for brands and studios", "Help reviewing deal terms"],
      image: "/images/services/licensing.png",
    },
    portfolio: {
      title: "Characters *Ready to License*",
      description: "Character brands we’ve prepared for licensing.",
    },
    faq: {
      title: "Licensing *Questions*",
      items: [
        { question: "Are my characters ready for licensing?", answer: "Characters with a strong look and an audience do best. We’ll review yours and suggest next steps." },
        { question: "Do I keep ownership of my characters?", answer: "Yes. Licensing gives others permission to use them. You stay the owner." },
        { question: "How do I earn from licensing?", answer: "Usually through a royalty, a percentage of sales on licensed products." },
        { question: "Do you provide legal advice?", answer: "No. We help you understand deal terms, but you should have a lawyer review any contract." },
      ],
    },
  },
};