use AuthorResearchDB;  

-- all research papers and the number of authors that wrote that paper.
select research_papers.paper_title, count(authors_research.author_id) as number_of_authors
from research_papers
left join authors_research on research_papers.paper_id = authors_research.research_id
group by research_papers.paper_id, research_papers.paper_title;

-- sum of the research papers published by all female authors.
select count(*) as research_papers_female 
from research_papers  
join authors_research on research_papers.paper_id = authors_research.research_id 
join authors on authors_research.author_id = authors.author_id
where gender = 'female';

-- average of the h-index of all authors per university.
select university, avg(h_index) as avg_h_index
from authors 
group by university;

-- sum of the research papers of the authors per university.
select university, count(authors_research.research_id) as research_papers  
from authors 
join authors_research on authors.author_id = authors_research.author_id
group by university;

-- minimum and maximum of the h-index of all authors per university.
select university, max(h_index) as max_h_index, min(h_index) as min_h_index 
from authors 
group by university;
