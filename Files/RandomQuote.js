// console.log("Kashif")

const quotesAuthors = [
    {
        quote: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        author: "- Louis L’Amour"
    },
    {
        quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.",
        author: "- William Faulkner"
    },
    {
        quote: "The first draft is just you telling yourself the story.",
        author: "- Terry Pratchett"
    },
    {
        quote: "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.",
        author: "- Octavia E. Butler"
    },
    {
        quote: "Start before you’re ready.",
        author: "- Steven Pressfield"
    },
    {
        quote: "You can always edit a bad page. You can’t edit a blank page",
        author: "- Jodi Picoult"
    },
    {
        quote: "You can’t wait for inspiration. You have to go after it with a club.",
        author: "- Jack London"
    },
    {
        quote: "I have never started a poem yet whose end I knew. Writing a poem is discovering.",
        author: "- Robert Frost"
    },
    {
        quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        author: "- Toni Morrison"
    },
    {
        quote: "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles.",
        author: "- Shannon Hale"
    },
    {
        quote: "I get a lot of letters from people. They say, \" I want to be a writer.What should I do?\" I tell them to stop writing to me and get on with it.",
        author: ""
    },
    {
        quote: "First, find out what your hero wants, then just follow him!",
        author: "- Ray Bradbury"
    },
    {
        quote: "The greatest part of a writer’s time is spent in reading, in order to write. A man will turn over half a library to make a book.",
        author: "- Samuel Johnson"
    },
    {
        quote: "Writing a novel is like driving a car at night. You can only see as far as your headlights, but you can make the whole trip that way.",
        author: "-  E. L. Doctorow"
    },
    {
        quote: "To produce a mighty book, you must choose a mighty theme.",
        author: "- Herman Melville"
    },
    {
        quote: "Tell the readers a story! Because without a story, you are merely using words to prove you can string them together in logical sentences.",
        author: "- Anne McCaffrey"
    },
    {
        quote: "Description begins in the writer’s imagination but should finish in the reader’s.",
        author: "- Stephen King"
    },
    {
        quote: "No tears in the writer, no tears in the reader. No surprise in the writer, no surprise in the reader.",
        author: "- Robert Frost"
    },
    {
        quote: "If you want to be a writer, you must do two things above all others: read a lot and write a lot.",
        author: "- Stephen King"
    }
]

$(document).ready(function () {
    $("#btn").click(function generate() {
        let randomquote = Math.floor(Math.random() * quotesAuthors.length)
        $("#quote").text(quotesAuthors[randomquote].quote);
        $("#author").text(quotesAuthors[randomquote].author);
    });
    generate()
});

