insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 60746948000112),
    ('Vale', 33592510000154),
    ('Cielo',01027058000191)

alter table empresas modify cnpj varchar(14);

desc empresas;

insert into empresas_unidades
    (empresas_id, cidade_id, sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);

select * from empresas_unidades

