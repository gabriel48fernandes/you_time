PGDMP  0    ,            
    |            you_time    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16470    you_time    DATABASE        CREATE DATABASE you_time WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Portuguese_Brazil.1252';
    DROP DATABASE you_time;
                postgres    false                        2615    16471    you_time    SCHEMA        CREATE SCHEMA you_time;
    DROP SCHEMA you_time;
                postgres    false            �            1259    16491    agendamentos    TABLE     �   CREATE TABLE you_time.agendamentos (
    cliente integer,
    "serviço" integer,
    data date,
    horario time with time zone,
    cod integer NOT NULL
);
 "   DROP TABLE you_time.agendamentos;
       you_time         heap    postgres    false    6            �            1259    16472    cliente    TABLE     n   CREATE TABLE you_time.cliente (
    nome text NOT NULL,
    numero text NOT NULL,
    cod integer NOT NULL
);
    DROP TABLE you_time.cliente;
       you_time         heap    postgres    false    6            �            1259    16479 	   serviços    TABLE     v   CREATE TABLE you_time."serviços" (
    cortes text NOT NULL,
    valor numeric NOT NULL,
    cod integer NOT NULL
);
 !   DROP TABLE you_time."serviços";
       you_time         heap    postgres    false    6            �          0    16491    agendamentos 
   TABLE DATA           Q   COPY you_time.agendamentos (cliente, "serviço", data, horario, cod) FROM stdin;
    you_time          postgres    false    218   �       �          0    16472    cliente 
   TABLE DATA           6   COPY you_time.cliente (nome, numero, cod) FROM stdin;
    you_time          postgres    false    216   �       �          0    16479 	   serviços 
   TABLE DATA           ;   COPY you_time."serviços" (cortes, valor, cod) FROM stdin;
    you_time          postgres    false    217   a       Y           2606    16478    cliente cliente_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY you_time.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (cod);
 @   ALTER TABLE ONLY you_time.cliente DROP CONSTRAINT cliente_pkey;
       you_time            postgres    false    216            ]           2606    16495    agendamentos pk_agendamentos 
   CONSTRAINT     ]   ALTER TABLE ONLY you_time.agendamentos
    ADD CONSTRAINT pk_agendamentos PRIMARY KEY (cod);
 H   ALTER TABLE ONLY you_time.agendamentos DROP CONSTRAINT pk_agendamentos;
       you_time            postgres    false    218            [           2606    16485    serviços serviços_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY you_time."serviços"
    ADD CONSTRAINT "serviços_pkey" PRIMARY KEY (cod);
 H   ALTER TABLE ONLY you_time."serviços" DROP CONSTRAINT "serviços_pkey";
       you_time            postgres    false    217            ^           2606    16496    agendamentos fk_cliente    FK CONSTRAINT     �   ALTER TABLE ONLY you_time.agendamentos
    ADD CONSTRAINT fk_cliente FOREIGN KEY (cliente) REFERENCES you_time.cliente(cod) NOT VALID;
 C   ALTER TABLE ONLY you_time.agendamentos DROP CONSTRAINT fk_cliente;
       you_time          postgres    false    218    4697    216            _           2606    16501    agendamentos fk_serviços    FK CONSTRAINT     �   ALTER TABLE ONLY you_time.agendamentos
    ADD CONSTRAINT "fk_serviços" FOREIGN KEY ("serviço") REFERENCES you_time."serviços"(cod) NOT VALID;
 G   ALTER TABLE ONLY you_time.agendamentos DROP CONSTRAINT "fk_serviços";
       you_time          postgres    false    217    218    4699            �   (   x�3�4�4202�54�54�4��20 "]cNC�=... dt�      �   `   x�sOL*�L�QpK-�K�KI-��05Դ�4�46��4�4�r�/M�I,V�,.JĹH[���Yrq��e��+�旔$B%L��M�z��b���� ���      �   r   x�]��@0��u�)f%DB]�66Ӛ A��x~%HX�����Ƹ��-�%��BkՀ�ƞ���s~�B��y$ẻ���0���F�5��&��fxy�Y�������+ � �7     