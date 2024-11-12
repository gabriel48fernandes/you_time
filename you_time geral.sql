--criando schema

-- SCHEMA: you_time

-- DROP SCHEMA IF EXISTS you_time ;

CREATE SCHEMA IF NOT EXISTS you_time
    AUTHORIZATION postgres;

--criando tabela agendamentos

	-- Table: you_time.agendamentos

-- DROP TABLE IF EXISTS you_time.agendamentos;

CREATE TABLE IF NOT EXISTS you_time.agendamentos
(
    cliente integer,
    "serviço" integer,
    data date,
    horario time with time zone,
    cod integer NOT NULL,
    CONSTRAINT pk_agendamentos PRIMARY KEY (cod),
    CONSTRAINT fk_cliente FOREIGN KEY (cliente)
        REFERENCES you_time.cliente (cod) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "fk_serviços" FOREIGN KEY ("serviço")
        REFERENCES you_time."serviços" (cod) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS you_time.agendamentos
    OWNER to postgres;

--criando tabela clientes


-- Table: you_time.cliente

-- DROP TABLE IF EXISTS you_time.cliente;

CREATE TABLE IF NOT EXISTS you_time.cliente
(
    nome text COLLATE pg_catalog."default" NOT NULL,
    numero text COLLATE pg_catalog."default" NOT NULL,
    cod integer NOT NULL,
    CONSTRAINT cliente_pkey PRIMARY KEY (cod)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS you_time.cliente
    OWNER to postgres;


--criando tabela serviços


-- Table: you_time.serviços

-- DROP TABLE IF EXISTS you_time."serviços";

CREATE TABLE IF NOT EXISTS you_time."serviços"
(
    cortes text COLLATE pg_catalog."default" NOT NULL,
    valor numeric NOT NULL,
    cod integer NOT NULL,
    CONSTRAINT "serviços_pkey" PRIMARY KEY (cod)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS you_time."serviços"
    OWNER to postgres;
	
	