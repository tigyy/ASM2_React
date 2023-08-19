/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Form, Button, Input, Upload, message } from "antd";
import {  AiOutlineLoading3Quarters } from "react-icons/ai";
import {UploadOutlined,} from "@ant-design/icons"
import { useAddProductMutation } from "../../../api/product";
import { useNavigate } from "react-router-dom";

type FieldType = {
    name: string;
    price: number;
    img: string; 
    imageUrl?: string;
};

const AdminProductAdd = () => {
    const [addProduct, { isLoading }] = useAddProductMutation();
    const navigate = useNavigate();
    const [imageFileList, setImageFileList] = useState<any[]>([]);
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

    const handleImageUpload = (info: any) => {
        if (info.file.status === "done") {
            message.success(`${info.file.name} tải lên thành công`);
            setImageUrl(info.file.response.url); 
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} tải lên thất bại`);
        }
        setImageFileList([...info.fileList]);
    };

    const onFinish = (values: FieldType) => {
        addProduct({ ...values, img: [imageUrl], imageUrl: undefined }).unwrap().then(() => navigate("/admin/product"));
    };

    return (
        <div>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
            </header>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm!" },
                        { min: 3, message: "Sản phẩm ít nhất 3 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Giá sản phẩm" name="price">
                    <Input />
                </Form.Item>

                <Form.Item label="Ảnh sản phẩm (URL)" name="imageUrl">
                    <Input onChange={(e) => setImageUrl(e.target.value)} />
                </Form.Item>

                {imageUrl && (
                    <Form.Item label="Ảnh minh họa">
                        <img src={imageUrl} alt="Ảnh minh họa" style={{ maxWidth: "100%", maxHeight: "200px" }} />
                    </Form.Item>
                )}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isLoading ? <AiOutlineLoading3Quarters className="animate-spin" /> : "Thêm"}
                    </Button>
                    <Button type="primary" danger className="ml-2" onClick={() => navigate("/admin/product")}>
                        Quay lại
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminProductAdd;
