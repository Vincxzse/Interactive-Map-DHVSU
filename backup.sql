--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

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
-- Name: customer_accounts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.customer_accounts_id_seq OWNED BY public.customer_accounts.id;


--
-- Name: customer_accounts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_accounts ALTER COLUMN id SET DEFAULT nextval('public.customer_accounts_id_seq'::regclass);


--
-- Data for Name: customer_accounts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer_accounts (id, username, email, password, role) FROM stdin;
32	Vince	vince.salenga@gmail.com	$2b$10$MYsAZ2ABzVvueGp1fbK7.O67Q.bGnr16/4EfwRf7tkjPmHNNobGXe	super admin
49	admin	ajuju@gmail.com	$2b$10$MCtt4QzCpdUpWAGT4Bty3.7wQ3YwlyxwK4YUBaAAsclnSVjBApLPe	admin
50	ordinary	ordinary@gmail.com	$2b$10$.M7/J1QadNWyMbhT0VMDzucA87J53s.4WIsn5K2mApyGAjC5rUWse	user
48	test_registration	test@gmail.com	$2b$10$uoc5mjjiTxjC7gfxJPTaYuTnZxrPKYiRH8NoLkSpsDGc2FCnjv0HC	user
\.


--
-- Name: customer_accounts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.customer_accounts_id_seq', 50, true);


--
-- Name: customer_accounts customer_accounts_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_accounts
    ADD CONSTRAINT customer_accounts_email_key UNIQUE (email);


--
-- Name: customer_accounts customer_accounts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer_accounts
    ADD CONSTRAINT customer_accounts_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

