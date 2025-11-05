--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

-- Started on 2025-11-05 11:53:47

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16856)
-- Name: customer_accounts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer_accounts (
    id integer NOT NULL,
    username character varying(20) NOT NULL,
    email character varying(100) NOT NULL,
    password character varying(100),
    role text NOT NULL
);


ALTER TABLE public.customer_accounts OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16855)
-- Name: customer_accounts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.customer_accounts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.customer_accounts_id_seq OWNER TO postgres;

--
-- TOC entry 3327 (class 0 OID 0)
-- Dependencies: 214
-- Name: customer_accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_accounts_id_seq OWNED BY public.customer_accounts.id;


--
-- TOC entry 3173 (class 2604 OID 16859)
-- Name: customer_accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_accounts ALTER COLUMN id SET DEFAULT nextval('public.customer_accounts_id_seq'::regclass);


--
-- TOC entry 3321 (class 0 OID 16856)
-- Dependencies: 215
-- Data for Name: customer_accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer_accounts (id, username, email, password, role) FROM stdin;
32	Vince	vince.salenga@gmail.com	$2b$10$MYsAZ2ABzVvueGp1fbK7.O67Q.bGnr16/4EfwRf7tkjPmHNNobGXe	super admin
49	admin	ajuju@gmail.com	$2b$10$MCtt4QzCpdUpWAGT4Bty3.7wQ3YwlyxwK4YUBaAAsclnSVjBApLPe	admin
50	ordinary	ordinary@gmail.com	$2b$10$.M7/J1QadNWyMbhT0VMDzucA87J53s.4WIsn5K2mApyGAjC5rUWse	user
48	test_registration	test@gmail.com	$2b$10$uoc5mjjiTxjC7gfxJPTaYuTnZxrPKYiRH8NoLkSpsDGc2FCnjv0HC	user
\.


--
-- TOC entry 3328 (class 0 OID 0)
-- Dependencies: 214
-- Name: customer_accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_accounts_id_seq', 50, true);


--
-- TOC entry 3175 (class 2606 OID 16865)
-- Name: customer_accounts customer_accounts_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_accounts
    ADD CONSTRAINT customer_accounts_email_key UNIQUE (email);


--
-- TOC entry 3177 (class 2606 OID 16861)
-- Name: customer_accounts customer_accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_accounts
    ADD CONSTRAINT customer_accounts_pkey PRIMARY KEY (id);


-- Completed on 2025-11-05 11:53:48

--
-- PostgreSQL database dump complete
--

