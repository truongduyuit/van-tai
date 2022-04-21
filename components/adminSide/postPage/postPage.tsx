import {
  Box,
  Flex,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton,
  PopoverBody,
  Center,
  Tag,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LIMIT_RECORDS, Metadata, MetadataDefault } from "../../../contants";
import { IPostModel } from "../../../database";
import { setLoading, setOpenModal } from "../../../redux/appSlide";
import { AdminLayout } from "../../Layouts/AdminLayout";
import { Pagination } from "../../Pagination";
import { PostModal } from "./postModal";
import axios from "axios";

interface Post {
  records: IPostModel[];
  metadata: Metadata;
}

interface Props {
  posts?: Post;
}

const PostPage: React.FC<Props> = ({ posts }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [status, setStatus] = useState<boolean>(true);

  const [editRecord, setEditRecord] = useState<IPostModel | undefined>();
  const [currentRecords, setCurrentRecords] = useState<IPostModel[]>(
    posts?.records ?? []
  );
  const [metadata, setMetadata] = useState<Metadata>(
    posts?.metadata ?? MetadataDefault
  );

  const handleCreatePost = () => {
    setEditRecord(undefined);
    dispatch(setOpenModal(true));
  };

  const handleEditPost = (post: IPostModel) => {
    setEditRecord(post);
    dispatch(setOpenModal(true));
  };

  const getData = async (page: number, limit: number, options?: any) => {
    dispatch(setLoading(true));
    const accessToken = await localStorage.getItem("access_token");
    const result = await axios.get("/api/post", {
      params: {
        page,
        limit,
        ...options,
      },
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });
    const { records, metadata }: Post = result.data.data;
    setCurrentRecords(records);
    setMetadata(metadata);
    dispatch(setLoading(false));
  };

  const handleDeletePost = async (_id: string) => {
    dispatch(setLoading(true));
    const accessToken = await localStorage.getItem("access_token");
    const result = await axios.delete("/api/post", {
      data: { _id },
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    });

    const { success, error } = result?.data;
    if (success) {
      toast({
        title: "Xóa bài viết thành công",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      getData(0, LIMIT_RECORDS);
    } else {
      toast({
        title: "Thêm bài viết thất bại",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
    }
    dispatch(setLoading(false));
  };

  const handleChangeStatus = (status: boolean) => {
    setStatus(status);
    getData(0, LIMIT_RECORDS, {
      status,
    });
  };

  const changeCurrentPage = (numPage: number) => {
    getData(numPage - 1, LIMIT_RECORDS);
  };

  const onFinish = () => getData(0, LIMIT_RECORDS);

  return (
    <AdminLayout>
      <Box minH="20rem">
        <Flex justify="flex-end">
          <Button onClick={handleCreatePost} colorScheme="teal">
            Thêm bài viết
          </Button>
        </Flex>
        <TableContainer my={5}>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Tiêu đề</Th>
                <Th>Mô tả ngắn</Th>
                <Th>Gắn thẻ</Th>
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
              {currentRecords.map((record: IPostModel) => {
                const { _id, title, description, tags, status } = record;
                return (
                  <Tr key={_id.toString()}>
                    <Td>{title}</Td>
                    <Td>{description}</Td>
                    <Td>
                      {tags.length > 0
                        ? tags.map((tag: string) => (
                            <Tag
                              size="sm"
                              key={tag}
                              variant="solid"
                              bgColor="primary"
                              color="textSecondary"
                            >
                              {tag}
                            </Tag>
                          ))
                        : "Không có"}
                    </Td>
                    <Td>{status ? "Hoạt động" : "Đã xóa"}</Td>
                    <Td>
                      {status && (
                        <>
                          <Button
                            bgColor="warning"
                            color="textSecondary"
                            onClick={(e) => handleEditPost(record)}
                          >
                            Chỉnh sửa
                          </Button>
                          <Popover>
                            <PopoverTrigger>
                              <Button
                                bgColor="danger"
                                color="textSecondary"
                                mx={3}
                              >
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
                                    bgColor="primary"
                                    color="textSecondary"
                                    onClick={() =>
                                      handleDeletePost(_id.toString())
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
          <>Chưa có bài viết nào</>
        )}
      </Center>

      <PostModal onFinish={onFinish} record={editRecord} />
    </AdminLayout>
  );
};

export { PostPage };
