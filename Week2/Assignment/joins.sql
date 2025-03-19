USE AuthorResearchDB;  

select 
a.author_name as author_name, 
m.author_name as mentor_name 
from authors a   left join 
  authors m on a.mentor = m.author_id;
 

 select author_name,paper_title from authors 
left join 
authors_research on authors.author_id = authors_research.author_id
left join 
research_papers on authors_research.research_id = research_papers.paper_id;