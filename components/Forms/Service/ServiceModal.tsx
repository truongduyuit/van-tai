import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import { removeVI } from "jsrmvi";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IServiceModel } from "../../../database";
import { setLoading, setOpenModal } from "../../../redux/appSlide";
import { RootState } from "../../../redux/store";

interface Props {
  record?: IServiceModel;
  onFinish?: () => void;
}

const ServiceModal: React.FC<Props> = ({ record, onFinish }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const _isModalOpened = useSelector(
    (state: RootState) => state.app.modalOpened
  );

  const [isEdit, setIsEdit] = useState<boolean>();
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [path, setPath] = useState<string>();

  useEffect(() => {
    if (record) {
      const { name, description, path } = record;
      setIsEdit(true);
      setName(name);
      setDescription(description);
      setPath(path);
    } else {
      setIsEdit(false);
      setName("");
      setDescription("");
      setPath("");
    }
  }, [record]);

  const hanleChangeServiceName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setPath(removeVI(value));
  };

  const handleCreateOrEditService = async () => {
    dispatch(setLoading(true));

    const result = isEdit
      ? await axios.put("/api/service", {
          _id: record?._id.toString(),
          name,
          description,
          path,
        })
      : await axios.post("/api/service", {
          name,
          description,
          path,
        });

    const { success, data, error } = result?.data;
    if (success && data) {
      toast({
        title: isEdit
          ? "Chỉnh sửa dịch vụ thành công"
          : "Thêm dịch vụ thành công",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      onFinish?.();
    } else {
      toast({
        title: isEdit ? "Chỉnh sửa dịch vụ thất bại" : "Thêm dịch vụ thất bại",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }

    dispatch(setLoading(false));
    dispatch(setOpenModal(false));
  };

  return (
    <Modal
      isOpen={_isModalOpened ?? false}
      onClose={() => dispatch(setOpenModal(false))}
      size="3xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isEdit ? "Chỉnh sửa dịch vụ" : "Thêm dịch vụ"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
            <FormLabel htmlFor="service-name">Tên dịch vụ</FormLabel>
            <Input
              id="service-name"
              placeholder="Nhập tên dịch vụ"
              value={name}
              onChange={hanleChangeServiceName}
            />
          </FormControl>

          <FormControl isRequired my={5}>
            <FormLabel htmlFor="service-description">Mô tả</FormLabel>
            <Input
              id="service-description"
              placeholder="Nhập mô tả"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="service-url">Đường dẫn</FormLabel>
            <Input
              id="service-url"
              placeholder="Nhập đường dẫn"
              value={path}
              onChange={(e) => setPath(e.target.value)}
              disabled
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={() => dispatch(setOpenModal(false))}>
            Hủy bỏ
          </Button>
          <Button colorScheme="teal" onClick={handleCreateOrEditService}>
            Đồng ý
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { ServiceModal };

