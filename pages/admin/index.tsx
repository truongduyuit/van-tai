import {
  Button,
  Center,
  Flex,
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
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { ChangeEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, Sidebar } from "../../components";
import { IServiceModel, ServiceFuntions } from "../../database";
import { setLoading, setOpenModal } from "../../redux/appSlide";
import { RootState } from "../../redux/store";
import { removeVI } from "jsrmvi";
import axios from "axios";

interface Props {
  services: {
    records: IServiceModel[];
    metadata: {
      totalPage: number;
      totalRecord: number;
      currentPage: number;
      limit: number;
    };
  };
}

const DashboardPage: NextPage<Props> = ({ services }) => {
  const { records, metadata } = services;

  const finalRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();

  const _isModalOpened = useSelector(
    (state: RootState) => state.app.modalOpened
  );

  const [currentRecords] = useState<IServiceModel[]>(records);
  const [currentPage, setCurrentPage] = useState<number>(
    metadata.currentPage + 1
  );
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [path, setPath] = useState<string>("");

  const changeCurrentPage = (numPage: number) => {
    setCurrentPage(numPage);
  };

  const hanleChangeServiceName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setPath(removeVI(value));
  };

  const handleCreateService = async () => {
    dispatch(setLoading(true));

    const result = await axios.post("/api/service", {
      name,
      description,
      path,
    });

    const { success, data, error } = result.data;
    if (success && data) {
      currentRecords.push(data as IServiceModel);

      toast({
        title: "Thêm dịch vụ thành công",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      toast({
        title: "Thêm dịch vụ thất bại",
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
    <Sidebar>
      <Flex justify="flex-end">
        <Button onClick={() => dispatch(setOpenModal(true))} colorScheme="teal">
          Thêm dịch vụ
        </Button>
      </Flex>
      <TableContainer my={5}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Tên dịch vụ</Th>
              <Th>Mô tả</Th>
              <Th>Đường dẫn</Th>
              <Th>Hành động</Th>
            </Tr>
          </Thead>
          <Tbody>
            {records.map((record: IServiceModel) => {
              const { _id, name, description, path } = record;
              return (
                <Tr key={name}>
                  <Td>{name}</Td>
                  <Td>{description}</Td>
                  <Td>{path}</Td>
                  <Td>
                    <Button colorScheme="orange">Chỉnh sửa</Button>
                    <Button mx={2} colorScheme="red">
                      Xóa
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Center>
        {records.length ? (
          <Pagination
            currentPage={currentPage}
            totalPages={metadata.totalPage}
            changeCurrentPage={changeCurrentPage}
            p="3.5rem 0"
            w="80%"
          />
        ) : (
          <>Chưa có dịch vụ nào</>
        )}
      </Center>

      <Modal
        finalFocusRef={finalRef}
        isOpen={_isModalOpened ?? false}
        onClose={() => dispatch(setOpenModal(false))}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm dịch vụ</ModalHeader>
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
            <Button colorScheme="teal" onClick={handleCreateService}>
              Đồng ý
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Sidebar>
  );
};

export default DashboardPage;

export async function getServerSideProps() {
  const services = await ServiceFuntions.getByQuery({
    page: 0,
    limit: 10,
    sort: {
      createdAt: -1,
    },
  });
  return {
    props: {
      services: JSON.parse(JSON.stringify(services)),
    },
  };
}
