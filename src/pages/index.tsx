import { FC, useState } from 'react';
import {
  AtomButton,
  AtomContainer,
  AtomIcon,
  AtomInput,
  AtomLink,
  AtomLoader,
  AtomSeparator,
  AtomText,
  AtomWrapper,
  AtomUserDefault,
  AtomMap,
  AtomBanner,
  AtomTextEditor,
  AtomNotification,
} from '@atoms';

import {
  MoleculeCard,
  MoleculeCardImage,
  MoleculeButtonCardShop,
  useAlert,
  MyMessage,
  OtherMessage,
  HeaderLink,
  HeaderLogo,
  Header,
  CartShop,
} from '@components';
import { css } from '@emotion/react';
import Footer from '@components/footer';
import FooterColumns from '@components/footer/columns';
import { Link } from '@components/Header/types';
import SidebarHeader from '@components/Header/Sidebar';
import Sidebar from '@components/Sidebar';
import SidebarCall from '@components/Sidebar/SidebarCall';
import SidebarLinks from '@components/Sidebar/SidebarLinks';
import AtomPagination from '@atoms/AtomPagination';
import ButtonsCartShop from '@components/CartShop/ButtonsCartShop';
import ItemCartShop from '@components/CartShop/ItemCartShop';
import { data } from '@atoms/AtomMaps/maps/mx/data';
import { v4 as uuidv4 } from 'uuid';
import InputImageEditor from '@atoms/AtomImageEditor';

const Links: Link[] = [
  {
    id: uuidv4(),
    label: 'Tecnología',
    // link: '/tecnologia/automatizacion',
    type: 'dropdown',
    subFields: [
      {
        label: 'Automatización',
        link: '/tecnologia/automatizacion',
      },
      {
        label: 'Plataformas virtuales',
        link: '/tecnologia/plataformas-virtuales',
      },
      {
        label: 'Funcionalidades',
        link: '/tecnologia/funcionalidades',
      },
    ],
  },
  {
    id: uuidv4(),
    label: 'Historias de éxito',
    link: '/historias-de-exito',
    type: 'dropdown',
    subFields: [
      {
        label: 'Por industria',
        link: '/historias-de-exito/por-industria',
      },
      {
        label: 'Por tecnología',
        link: '/historias-de-exito/por-tecnologia',
      },
    ],
  },
  {
    id: uuidv4(),
    label: 'Aprende',
    link: '/aprende-ia',
  },
  {
    id: uuidv4(),
    label: 'Aprende',
    link: '/aprende-ia',
  },
  {
    id: uuidv4(),
    label: 'Aprende',
    link: '/aprende-ia',
  },
  {
    id: uuidv4(),
    label: 'Aprende',
    link: '/aprende-ia',
  },
  {
    id: uuidv4(),
    label: 'Aprende',
    link: '/aprende-ia',
  },
  {
    id: uuidv4(),
    label: 'Aprende',
    link: '/aprende-ia',
  },
];

const NotifMsageSimulation = [
  { message: `Tiene una cita pronto` },
  { message: `cita dos.....` },
  { message: `cita tres con la Dra....` },
  { message: `cita cuatro con la Dra....` },
  { message: `cita cuatro con la Dra....` },
];

type PropsIndex = {
  propTest: string;
};

const PageIndex: FC<PropsIndex> = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 6,
    hasnextpage: false,
    hasprevpage: false,
    pagingcounter: 0,
    totaldocs: 30,
  });
  const { insertAlert } = useAlert();

  return (
    <AtomContainer
      backgroundColor="#fafafa"
      minHeight="100vh"
      margin="80px 0px 0px 0px"
      justifyContent="flex-start"
    >
      <AtomWrapper
        backgroundColor="#fe6a6a"
        alignItems="center"
        justifyContent="flex-start"
      >
        <AtomText fontSize="28px">Page to Test Libraries</AtomText>
        <AtomButton
          backgroundColor="#f5f5f5"
          color="#fe6a6a"
          padding="8px 30px"
          fontSize="12px"
          fontWeight="600"
          onClick={() => {
            insertAlert({
              type: 'error',
              message: `Validando el error`,
            });
          }}
        />
        <AtomLink href="www.google.com">
          <AtomText fontSize="12px">Link to Google</AtomText>
        </AtomLink>
        <AtomInput placeholder="Text placeholder" />
        <AtomLoader type="small" isLoading colorLoading="white" />
      </AtomWrapper>
      <InputImageEditor />
      <AtomTextEditor />
      {/* <MoleculeCard
        customCSS={css`
          width: 600px;
          border: 1px solid gray;
        `}
      >
        <MoleculeCardImage
          customCSS={css`
            padding: 15px;
          `}
        />
        <MoleculeButtonCardShop iconColor="blue">
          Prueba de algo{' '}
        </MoleculeButtonCardShop>
        <h1>Titulo</h1>
        <div style={{ height: `50px` }} />
      </MoleculeCard> */}
      {/* <div style={{ padding: '30px' }}>
        <MyMessage
          imagen="https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg"
          content={<>Hola soy un mensaje</>}
          borderRadius="10px 0 10px 10px"
          dateMessage="12 de agosto de 2022"
          background="gray"
          componentsProps={{
            textProps: {
              alignSelf: 'flex-start',
              color: 'red',
            },
          }}
        />
        <OtherMessage
          imagen="https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg"
          content={<>Hola soy un mensaje</>}
          borderRadius="0 10px 10px 10px"
          dateMessage="12 de agosto de 2022"
          background="gray"
          name="Ricardo garcia"
        />
      </div> */}
      {/* <AtomButton
        backgroundColor="#f5f5f5"
        color="#fe6a6a"
        padding="8px 30px"
        fontSize="12px"
        fontWeight="600"
        onClick={() => {
          insertAlert({
            type: 'error',
            message: `Validando el error`,
          });
        }}
      /> */}
      {/* <AtomFilterSearch />

      <AtomFilterSearch />
      <AtomFilterRange />
      <AtomFilterCategory
        options={[
          { id: 'mioption', label: 'Option 1', value: 'option1' },
          { id: '2', label: 'Option 2', value: 'option2' },
          { id: '3', label: 'Option 3', value: 'option3' },
          { id: '4', label: 'Option 4', value: 'option4' },
        ]}
      /> */}

      <Footer>
        <FooterColumns>
          <AtomWrapper>
            <AtomText color="white" fontSize="18px" fontWeight={600}>
              TERMINOS Y CONDICIONES
            </AtomText>
            <AtomLink href="www.google.com">
              <AtomText color="white" fontSize="12px">
                Aviso de privacidad
              </AtomText>
            </AtomLink>
          </AtomWrapper>
          <AtomWrapper>
            <AtomText color="white" fontSize="18px" fontWeight={600}>
              CONTACTO
            </AtomText>
            <AtomLink href="www.google.com">
              <AtomText color="white" fontSize="12px">
                contacto@ixulabs.com
              </AtomText>
            </AtomLink>
          </AtomWrapper>
          <AtomWrapper>
            <AtomText color="white" fontSize="18px" fontWeight={600}>
              SOCIAL MEDIA
            </AtomText>
            <AtomWrapper
              flexDirection="row"
              justifyContent="flex-start"
              margin="5px 0px 0px 0px"
            >
              {[
                {
                  id: 'c3-l1',
                  icon: 'facebook-new',
                  href: 'https://www.facebook.com/ixulabs.mx/',
                },
                {
                  id: 'c3-l2',
                  icon: 'twitter-new',
                  href: 'https://twitter.com/ixulabs',
                },
                {
                  id: 'c3-l3',
                  icon: 'instagram-new',
                  href: 'https://www.instagram.com/ixulabs.mx/',
                },
                {
                  id: 'c3-l4',
                  icon: 'linkedin-new',
                  href: 'https://www.linkedin.com/company/ixulabs/',
                },
              ].map((item) => (
                <AtomLink key={item.id} href={item.href}>
                  <AtomIcon
                    color="white"
                    width="20px"
                    icon={`
                  https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/icons/${item.icon}.svg
                  `}
                    customCSS={css`
                      margin-right: 20px;
                    `}
                  />
                </AtomLink>
              ))}
            </AtomWrapper>
          </AtomWrapper>
        </FooterColumns>
        <AtomSeparator height="1px" color="#ff788a" margin="0px 0px 0px 0px" />
        <AtomWrapper alignItems="center" justifyContent="center">
          <AtomText
            color="white"
            align="center"
            width="max-content"
            fontSize="14px"
            margin="40px 0px"
            fontWeight="bold"
          >
            Derechos Reservados Ixulabs © 2021
          </AtomText>
        </AtomWrapper>
      </Footer>
      <Header>
        <HeaderLogo src="https://storage.googleapis.com/cdn-bucket-ixulabs-platform/IXU-0001/logos/horizontal/logo.svg" />
        <HeaderLink links={Links} linksLength={5} />
        <AtomWrapper
          width="max-content"
          flexDirection="row"
          alignItems="center"
        >
          <AtomUserDefault
            componentProps={{
              menuProps: {
                buttonProps: {
                  onClick: () => console.log(`Cerrando sesión`),
                },
              },
            }}
            name="Prueba uno"
          />
          <CartShop>
            <ItemCartShop
              buttonSection={
                <>
                  <ButtonsCartShop />
                </>
              }
            >
              <p>Precio</p>
              <p>Sku</p>
              <p>descripción</p>
            </ItemCartShop>
          </CartShop>
        </AtomWrapper>
        {/* <Sidebar Links={Links} /> */}
        <AtomNotification
          count={NotifMsageSimulation?.length}
          color="#21dd69"
          notification={
            // ejemplo
            <>
              {NotifMsageSimulation?.map((v: any) => (
                <AtomButton
                  key={uuidv4()}
                  customCSS={css`
                    width: auto !important;
                    background-color: #ff788a !important;
                    margin-top: 5px;
                  `}
                >
                  {v?.message}
                </AtomButton>
              ))}
            </>
          }
        />
        <SidebarHeader Links={Links}>
          <AtomUserDefault
            componentProps={{
              menuProps: {
                buttonProps: {
                  onClick: () => console.log(`Cerrando sesión`),
                },
              },
              imageProps: {
                customCSS: css`
                  margin: 0 auto;
                `,
              },
            }}
            name="Prueba uno"
            wrapperProps={{
              customCSS: css`
                @media screen and (max-width: 1200px) {
                  display: block;
                }
              `,
            }}
          />
        </SidebarHeader>
      </Header>
      {/* <Wrapper width="300px">
        <MoleculeInsertComment
          componentsProps={{
            buttonProps: {
              onClick: () => console.log(`Enviando...`),
              margin: `10px auto`,
            },
          }}
        />
      </Wrapper> */}
      {/* <AtomBanner
        title="<span>Guia </span> del deporte"
        componentsProps={{
          wrapperProps: {
            customCSS: css`
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              background-image: url('https://storage.googleapis.com/cdn-bucket-ixulabs-platform/BMB-001/GPL-001/banner2.png');
            `,
          },
          titleProps: {
            customCSS: css`
              flex-direction: row;
              justify-content: flex-end;
              color: #ffffff;
              font-weight: 600;
              span {
                color: green;
              }
            `,
          },
        }}
      /> */}
      <Sidebar>
        <SidebarLinks>
          <SidebarCall />
        </SidebarLinks>
      </Sidebar>

      <AtomWrapper
        padding="20px"
        customCSS={css`
          gap: 20px;
        `}
      >
        <AtomPagination
          statePagination={pagination}
          setStatePagination={setPagination}
          acentColor="#7dff78"
          componentsProps={{
            controlsProps: {
              buttonsProps: {
                customCSS: css`
                  background-color: red;
                `,
              },
            },
          }}
        />
        <AtomPagination
          statePagination={pagination}
          setStatePagination={setPagination}
          acentColor="#8c78ff"
        />
        <AtomPagination
          statePagination={pagination}
          setStatePagination={setPagination}
          acentColor="#d42020"
        />
        <AtomWrapper
          backgroundColor="#000000"
          alignItems="center"
          justifyContent="center"
        >
          <AtomLink href="https://www.google.com/" target="_self">
            <AtomText color="white">google</AtomText>
          </AtomLink>
        </AtomWrapper>
      </AtomWrapper>
      <AtomMap place="mx" width="800px" hover="#299e71" data={data} />
      <AtomWrapper
        customCSS={css`
          width: 50%;
        `}
      >
        <OtherMessage
          name="Nombre"
          background="#d8d8d8"
          borderRadius="0 10px 10px 10px"
          imagen="https://storage.googleapis.com/bucket_ixuabs_general/Ixulabs/icons/avatar.png"
          componentsProps={{
            textProps: {
              alignSelf: 'flex-end',
              color: `black`,
              margin: `0px 0px 0px 10px`,
            },
            messageProps: {
              width: `100%`,
            },
          }}
          content="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><img src=https://marketing4ecommerce.net/wp-content/uploads/2018/01/Depositphotos_3667865_m-2015-compressor.jpg alt=prueba img />"
          dateMessage="01-20-22 - 12:40"
          messageOptions={<button type="button">...</button>}
        />
        <MyMessage
          name="Nombre"
          background="#d8d8d8"
          borderRadius="10px 0 10px 10px"
          imagen="https://storage.googleapis.com/bucket_ixuabs_general/Ixulabs/icons/avatar.png"
          componentsProps={{
            textProps: {
              alignSelf: 'flex-end',
              color: `black`,
            },
            messageProps: {
              width: `100%`,
            },
          }}
          content="Texto del mensaje"
          dateMessage="01-20-22 - 12:40"
          messageOptions={<button type="button">...</button>}
        />
      </AtomWrapper>
    </AtomContainer>
  );
};

export default PageIndex;
