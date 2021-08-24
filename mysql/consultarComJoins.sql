select * from cidades
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;
select * from cidades c LEFT join prefeitos p on c.id = p.cidade_id
select * from cidades c RIGHT join prefeitos p on c.id = p.cidade_id

-- full join
select * from cidades c left join prefeitos p on c.id = p.cidade_id
union 
select * from cidades c right join prefeitos p on c.id = p.cidade_id
