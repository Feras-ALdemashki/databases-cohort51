USE AuthorResearchDB ;
create table if not exists research_Papers (
paper_id int auto_increment primary key,
paper_title varchar(100),
conference varchar(100),
publish_date date );

create table if not exists  authors_research (
author_id int ,
research_id int , 
primary key (author_id,research_id ),
foreign key (author_id) references authors(author_id),
foreign key(research_id) references research_papers(paper_id));