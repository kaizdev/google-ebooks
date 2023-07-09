// Truncate book description where words > 30 to enhance grid experience
const truncateDescription = (description, limit = 30) => {
    const words = description.split(" ");
    if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
    } else {
        return description;
    }
};

// Retrieve the eBook data via API. Clean up the data prior to mapping
export const getEbooksBySearch = async (searchString) => {
    const response = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=" +
            searchString +
            "&maxResults=9"
    );
    if (!response.ok) {
        throw new Error("Failed to fetch eBooks");
    }

    const data = await response.json();
    if (!data.items || !data.items.length === 0) {
        throw new Error("No search results matched your search criteria");
    }
    // the relevant book information is in the volumeInfo property of each object array
    const bookData = data.items.map((book) => {
        const {
            volumeInfo: {
                // setting default messages if the data is not available (instead of undefined)
                authors = ["No author available"],
                description = "No description available",
                title = "No title available",
                imageLinks: { thumbnail } = {
                    thumbnail:
                        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/128px-No-Image-Placeholder.svg.png",
                },
            },
        } = book;
        const authorsString = authors.join(", ");
        const shortDescription = truncateDescription(description);
        return {
            authors: authorsString,
            // description: shortDescription,
            description,
            title,
            thumbnail,
        };
    });
    return bookData;
};
