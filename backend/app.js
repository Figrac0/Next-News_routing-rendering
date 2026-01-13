import express from "express";
import sqlite from "better-sqlite3";
import cors from "cors";

const DUMMY_NEWS = [
    {
        id: "n1",
        slug: "ai-human-future",
        title: "The AI Paradox: Augmentation vs. Replacement in the Digital Age",
        image: "ai-robot.jpg",
        date: "2023-11-15",
        content: [
            "Since the groundbreaking release of advanced AI systems in late 2022, the world has been grappling with a fundamental question that echoes through corporate boardrooms and coffee shops alike: Will artificial intelligence render human workers obsolete, or will it become our greatest collaborative partner?",

            "The reality is far more nuanced than simple replacement narratives suggest. AI represents not a competitor, but a transformative tool—one that automates routine tasks while simultaneously augmenting uniquely human capabilities like creativity, emotional intelligence, and strategic thinking.",

            "The Collaborative Future",
            "Consider the medical field, where AI algorithms now analyze medical images with superhuman accuracy, yet final diagnoses and patient care remain firmly in the hands of compassionate physicians. Or the creative industries, where generative AI assists writers and designers while human editors curate and refine the output.",

            "The true challenge lies not in technological advancement, but in societal adaptation. As MIT researcher Dr. Elena Rodriguez notes, 'The most successful organizations will be those that redesign workflows around human-AI collaboration rather than automation alone.'",

            "Beyond the Hype Cycle",
            "History reminds us that technological revolutions create more jobs than they eliminate, albeit different ones. The steam engine didn't end human labor—it transformed it. Similarly, AI won't replace humans but will redefine what human work means, shifting our focus toward more complex problem-solving, ethical oversight, and creative innovation.",

            "The future remains unwritten, but one truth emerges clearly: AI's impact depends entirely on human choices about governance, education, and economic systems designed to benefit all of society.",
        ].join("\n\n"),
    },
    {
        id: "n2",
        slug: "ecosystem-engineers",
        title: "Nature's Architects: How Beavers Are Reshaping Our Environment",
        image: "beaver.jpg",
        date: "2023-05-22",
        content: [
            "Across North America and Europe, a remarkable ecological phenomenon is unfolding. Beavers, once hunted to near extinction, are experiencing a dramatic resurgence—and their return is transforming landscapes in ways both beautiful and challenging.",

            "These industrious rodents, often called 'ecosystem engineers,' don't just build dams; they create entire wetlands that support biodiversity, improve water quality, and mitigate climate change effects.",

            "The Engineering Marvel",
            "A single beaver family can construct dams spanning hundreds of feet, using sophisticated techniques that would impress human engineers. Their structures are dynamic, constantly modified in response to water flow and environmental conditions. Dr. Samuel Waters, a wildlife biologist at Cornell University, explains, 'Beavers possess an innate understanding of hydrology that we're only beginning to comprehend.'",

            "The resulting ponds create habitats for fish, amphibians, and waterfowl while recharging groundwater and filtering pollutants. Recent studies show beaver-created wetlands can store millions of gallons of water, reducing flood risks downstream.",

            "Human-Wildlife Coexistence",
            "While their environmental benefits are undeniable, beavers sometimes clash with human infrastructure. Innovative solutions like 'beaver deceivers'—flow devices that prevent flooding while allowing dam construction—offer promising alternatives to traditional removal methods.",

            "As climate change intensifies, these furry engineers may become unexpected allies in our efforts to create resilient ecosystems. The question isn't how to stop them, but how to coexist with nature's most persistent and beneficial architects.",
        ].join("\n\n"),
    },
    {
        id: "n3",
        slug: "culinary-connection",
        title: "The Shared Kitchen: How Cooking Together Strengthens Relationships",
        image: "couple-cooking.jpg",
        date: "2024-03-10",
        content: [
            "In our hyper-connected yet often isolated world, researchers have identified a surprising sanctuary for meaningful connection: the kitchen. Cooking together, it turns out, offers far more than just nourishment—it provides a powerful framework for relationship building.",

            "A recent University of Oxford study found that couples who regularly prepare meals together report 42% higher relationship satisfaction and communicate more effectively during conflicts.",

            "The Chemistry of Collaboration",
            "The kitchen becomes a laboratory for partnership. Whether following a complex recipe or improvising with available ingredients, couples engage in what psychologists call 'cooperative flow'—a state of shared focus that reduces stress and builds mutual trust.",

            "Dr. Maria Chen, author of 'The Relationship Kitchen,' observes, 'When you chop vegetables together, you're literally and metaphorically preparing to nourish each other. The rhythmic, tangible nature of cooking provides a grounding counterpoint to our increasingly digital lives.'",

            "Beyond Romantic Relationships",
            "This principle extends to families, friends, and even coworkers. Company teams that participate in cooking workshops show improved collaboration back in the office. Families report deeper conversations while preparing Sunday dinners than during formal 'family meetings.'",

            "The recipe for connection is surprisingly simple: choose a dish that challenges but doesn't overwhelm, assign complementary tasks, and focus on the process rather than perfection. The resulting meal becomes secondary to the shared experience of creation.",

            "As one participant noted, 'We didn't just make pasta; we made memories.'",
        ].join("\n\n"),
    },
    {
        id: "n4",
        slug: "mountain-medicine",
        title: "Trail Therapy: The Science Behind Hiking's Transformative Power",
        image: "hiking.jpg",
        date: "2024-01-18",
        content: [
            "For centuries, humans have intuitively understood the restorative power of walking in nature. Now, modern science is quantifying what poets and philosophers have long proclaimed: hiking offers profound benefits that extend far beyond physical fitness.",

            "A landmark 2023 meta-analysis published in Nature Psychology reviewed 47 studies involving over 15,000 participants and found that regular hiking reduces symptoms of depression by 31% and anxiety by 28%—comparable to many pharmaceutical interventions.",

            "The Neurological Trail",
            "What happens in our brains during a hike? Researchers at Stanford University discovered that walking in natural environments decreases activity in the subgenual prefrontal cortex—a brain region associated with rumination and negative self-talk. Simultaneously, it increases connectivity in attention networks.",

            "'It's like hitting a reset button for your cognitive processes,' explains neuroscientist Dr. Robert Kim. 'The combination of rhythmic movement, natural visual complexity, and fresh air creates optimal conditions for mental clarity.'",

            "The Japanese Art of Forest Bathing",
            "This research validates the Japanese practice of Shinrin-yoku (forest bathing), now prescribed by doctors in several countries. Phytoncides—natural oils released by trees—have been shown to boost immune function by increasing natural killer cell activity.",

            "But you don't need remote wilderness to benefit. Urban green spaces and even virtual nature experiences offer measurable improvements in mood and cognitive function. The key appears to be intentional engagement with natural elements, however accessible.",

            "As healthcare systems increasingly recognize nature's therapeutic value, some doctors are literally prescribing hiking. The trail awaits—not just as a path through the woods, but as a journey toward better mental and physical health.",
        ].join("\n\n"),
    },
    {
        id: "n5",
        slug: "capturing-wilderness",
        title: "Through the Lens: Landscape Photography as Environmental Advocacy",
        image: "landscape.jpg",
        date: "2023-07-12",
        content: [
            "In an era of climate crisis and biodiversity loss, landscape photographers have evolved from mere documentarians to powerful advocates for conservation. Their images do more than capture beauty—they tell urgent stories about our changing planet.",

            "The great Ansel Adams once said, 'A true photograph need not be explained, nor can it be contained in words.' Today's environmental photographers build on this legacy, using their craft to bridge the gap between scientific data and public understanding.",

            "The Art of Witness",
            "Consider the work of photographers like James Balog, whose Extreme Ice Survey project visually documented glacial retreat over decades, making abstract climate data viscerally real. Or Cristina Mittermeier, whose SeaLegacy collective uses imagery to protect marine ecosystems.",

            "'We're not just creating pretty pictures,' Mittermeier explains. 'We're creating emotional connections to places most people will never visit. That connection is the first step toward caring, and caring leads to action.'",

            "Technical Mastery Meets Environmental Consciousness",
            "Modern landscape photography balances artistic vision with ethical practice. Leading photographers now follow principles like Leave No Trace, use carbon-neutral travel methods, and often donate proceeds to conservation efforts.",

            "The equipment has evolved too—from drones capturing unprecedented aerial perspectives to specialized filters that reveal pollution invisible to the naked eye. Yet the fundamental challenge remains unchanged: capturing light, composition, and moment in a way that moves viewers.",

            "As climate journalist David Wallace-Wells notes, 'The most powerful climate stories aren't told in degrees Celsius or tons of carbon, but in images of what we stand to lose—and what we might still save.'",

            "For aspiring photographers, the message is clear: Your lens can be a tool for change. Every image that inspires someone to care about our planet contributes to a larger story of preservation and hope.",
        ].join("\n\n"),
    },
    {
        id: "n6",
        slug: "forest-intelligence",
        title: "The Wood Wide Web: Uncovering the Secret Social Networks of Forests",
        image: "forest.jpg",
        date: "2025-06-05",
        content: [
            "Beneath the serene surface of every forest lies a bustling underground metropolis more complex than any human city. Recent discoveries in forest ecology have revealed that trees are not solitary beings competing for resources, but highly social organisms engaged in sophisticated communication and mutual support.",

            "The groundbreaking work of scientists like Dr. Suzanne Simard has transformed our understanding of forest ecosystems. Through decades of research, they've documented how trees use vast fungal networks—dubbed the 'Wood Wide Web'—to share nutrients, send distress signals, and even recognize their offspring.",

            "Mycorrhizal Networks: Nature's Internet",
            "Approximately 90% of land plants form symbiotic relationships with mycorrhizal fungi. These fungal filaments connect individual trees into forest-wide networks where resources flow according to need rather than proximity. A struggling sapling in shade might receive carbon from a well-established sunlit tree hundreds of feet away.",

            "'Mother trees,' the largest, oldest individuals in a forest, act as central hubs in these networks. They preferentially allocate resources to their genetic relatives while also supporting unrelated neighbors. When such a tree is damaged or dying, it gradually transfers its resources to the community through these fungal connections.",

            "Chemical Conversations",
            "Beyond resource sharing, trees communicate chemically. When attacked by insects, many species release volatile organic compounds that warn nearby trees to ramp up their defensive chemistry. Some evidence suggests these signals can travel through root networks as well as through the air.",

            "Dr. Simard's team has even documented how different species cooperate. In Pacific Northwest forests, Douglas firs transfer carbon to paper birches in summer, while birches reciprocate in spring when the firs are shaded by their leaves. This interspecies cooperation challenges traditional ecological models of pure competition.",

            "Implications for Conservation and Forestry",
            "These discoveries have profound implications for how we manage forests. Clear-cutting disrupts these ancient networks, potentially reducing forest resilience to climate change, pests, and disease. Selective harvesting that preserves mother trees and fungal networks may support healthier regrowth.",

            "The research also suggests forests have a form of collective intelligence. A forest isn't just a collection of trees—it's a superorganism with memory (mother trees 'remember' past droughts), learning capacity (adjusting resource allocation based on seasonal patterns), and even something resembling altruism.",

            "As we face climate change and biodiversity loss, understanding these complex relationships becomes crucial. The forest teaches us that survival often depends not on individual strength, but on community connection—a lesson with relevance far beyond the woods.",

            "The next time you walk through a forest, remember: You're not just among trees. You're witnessing one of Earth's oldest and most sophisticated societies, quietly conducting its business through whispers of chemistry and threads of fungal connection.",
        ].join("\n\n"),
    },
];

const db = sqlite("data.db");

function initDb() {
    db.prepare(
        "CREATE TABLE IF NOT EXISTS news (id INTEGER PRIMARY KEY, slug TEXT UNIQUE, title TEXT, content TEXT, date TEXT, image TEXT)"
    ).run();

    const { count } = db.prepare("SELECT COUNT(*) as count FROM news").get();

    if (count === 0) {
        const insert = db.prepare(
            "INSERT INTO news (slug, title, content, date, image) VALUES (?, ?, ?, ?, ?)"
        );

        DUMMY_NEWS.forEach((news) => {
            insert.run(
                news.slug,
                news.title,
                news.content,
                news.date,
                news.image
            );
        });
    }
}

const app = express();

app.use(cors());

app.get("/news", (req, res) => {
    const news = db.prepare("SELECT * FROM news").all();
    res.json(news);
});

initDb();

app.listen(8080);
