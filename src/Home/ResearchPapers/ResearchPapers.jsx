

const ResearchPapers = () => {
  // Sample data for recommended research papers (you can replace this with your actual data)
  const researchPapers = [
    {
      id: 1,
      title: "Research Paper 1",
      link: "https://www.example.com/research-paper-1",
      author: "Author 1",
    },
    {
      id: 2,
      title: "Research Paper 2",
      link: "https://www.example.com/research-paper-2",
      author: "Author 2",
    },
    // Add more research papers as needed
  ];

  return (
    <div>
      <h2>Recommended Research Papers</h2>
      <ul>
        {researchPapers.map((paper) => (
          <li key={paper.id}>
            <a href={paper.link} target="_blank" rel="noopener noreferrer">
              {paper.title}
            </a>{" "}
            - {paper.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchPapers;
