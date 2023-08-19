/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Layout, Menu, Card } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  PhoneOutlined,
} from '@ant-design/icons';
import {AiOutlineUser} from "react-icons/ai"

import { useGetProductsQuery } from '../../api/product';

const { Header, Content, Footer } = Layout;
const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
      © {new Date().getFullYear()} Your Company Name. All rights reserved.
    </Footer>
  );
};

const AppHeader = () => {
  const { data: productData, isLoading } = useGetProductsQuery();
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <a href="/admin/product">Product</a>
          </Menu.Item>
          <Menu.Item key="3" icon={<PhoneOutlined />}>
            Liên hệ
          </Menu.Item>
          <Menu.Item key="4" icon={<AiOutlineUser />}>
          <a href="/admin/signIn">SignIn</a>
          </Menu.Item>
          <Menu.Item key="5" icon={<AiOutlineUser />}>
          <a href="/admin/signUp">SignUp</a>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="banner">
          <img src="https://mifashop.net/wp-content/uploads/2020/07/banner-nuoc-hoa-mifashop-3-1.jpg" alt="" />
        </div>
        <div className=" grid grid-cols-4 gap-4">
          {productData?.map(product => (
            <a href={`/admin/product/${product.id}`}>
              <div key={product.id} className='mt-6'>
              <img className='m-auto w-[300px] h-[300px]' src={product.img} alt="" />
              <h2 className='text-xl text-center'>{product.name}</h2>
              <p className='text-lg text-center'>Giá: {product.price}đ</p>
            </div>
            </a>
            
          ))}
        </div>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppHeader;
