import {
  Button,
  Center,
  Flex,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "../../components";
import { ServiceModal } from "../../components/Forms/Service";
import { AdminLayout } from "../../components/Layouts/AdminLayout";
import { Metadata } from "../../contants";
import { IServiceModel, ServiceFuntions } from "../../database";
import { setLoading, setOpenModal } from "../../redux/appSlide";

interface Service {
  records: IServiceModel[];
  metadata: Metadata;
}

interface Props {
  services: Service;
}

const LIMIT_RECORDS = 10;

const ServicePage: NextPage<Props> = ({ services }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [status, setStatus] = useState<boolean>(true);
  const [editRecord, setEditRecord] = useState<IServiceModel | undefined>();
  const [currentRecords, setCurrentRecords] = useState<IServiceModel[]>(
    services.records
  );
  const [metadata, setMetadata] = useState<Metadata>(services.metadata);

  const getData = async (page: number, limit: number, options?: any) => {
    dispatch(setLoading(true));
    const result = await axios.get("/api/service", {
      params: {
        page,
        limit,
        ...options,
      },
    });
    const { records, metadata }: Service = result.data.data;

    setMetadata(metadata);
    setCurrentRecords(records);
    dispatch(setLoading(false));
  };

  const handleCreateService = () => {
    setEditRecord(undefined);
    dispatch(setOpenModal(true));
  };

  const handleEditService = (service: IServiceModel) => {
    setEditRecord(service);
    dispatch(setOpenModal(true));
  };

  const handleDeleteService = async (_id: string) => {
    const result = await axios.delete("/api/service", { data: { _id } });

    const { success, error } = result?.data;
    if (success) {
      toast({
        title: "Xóa dịch vụ thành công",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      getData(0, LIMIT_RECORDS);
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
  };

  const changeCurrentPage = (numPage: number) => {
    getData(numPage - 1, LIMIT_RECORDS);
  };

  const onFinish = () => getData(0, LIMIT_RECORDS);

  const handleChangeStatus = (status: boolean) => {
    setStatus(status);
    getData(0, LIMIT_RECORDS, {
      status,
    });
  };

  return (
    <AdminLayout>
      <Box minH="20rem">
        <Flex justify="flex-end">
          <Button onClick={handleCreateService} colorScheme="teal">
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
                <Th>
                  Trạng thái{" "}
                  <Checkbox
                    mx={2}
                    defaultChecked={true}
                    checked={status}
                    onChange={(e) => handleChangeStatus(e.target.checked)}
                  />
                </Th>
                <Th>Hành động</Th>
              </Tr>
            </Thead>
            <Tbody>
              {currentRecords.map((record: IServiceModel) => {
                const { _id, name, description, path, status } = record;
                return (
                  <Tr key={name}>
                    <Td>{name}</Td>
                    <Td>{description}</Td>
                    <Td>{path}</Td>
                    <Td>{status ? "Hoạt động" : "Đã xóa"}</Td>
                    <Td>
                      {status && (
                        <>
                          <Button
                            colorScheme="orange"
                            onClick={(e) => handleEditService(record)}
                          >
                            Chỉnh sửa
                          </Button>
                          <Popover>
                            <PopoverTrigger>
                              <Button colorScheme="red" mx={3}>
                                Xóa
                              </Button>
                            </PopoverTrigger>
                            <Portal>
                              <PopoverContent>
                                <PopoverHeader>
                                  Bạn chắc chắn muốn xóa &quot;{name}&quot; ?
                                </PopoverHeader>
                                <PopoverCloseButton />
                                <PopoverBody>
                                  <Button
                                    colorScheme="teal"
                                    onClick={() =>
                                      handleDeleteService(_id.toString())
                                    }
                                  >
                                    Đồng ý
                                  </Button>
                                </PopoverBody>
                              </PopoverContent>
                            </Portal>
                          </Popover>
                        </>
                      )}
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Center my={-3}>
        {currentRecords.length ? (
          <Pagination
            currentPage={metadata.currentPage + 1}
            totalPages={metadata.totalPage}
            changeCurrentPage={changeCurrentPage}
            p="3.5rem 0"
            w="80%"
          />
        ) : (
          <>Chưa có dịch vụ nào</>
        )}
      </Center>

      <ServiceModal onFinish={onFinish} record={editRecord} />
    </AdminLayout>
  );
};

export default ServicePage;

export async function getServerSideProps() {
  const services = await ServiceFuntions.getByQuery({
    query: {
      status: true,
    },
    page: 0,
    limit: LIMIT_RECORDS,
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
