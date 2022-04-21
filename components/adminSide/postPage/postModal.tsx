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
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IPostModel } from "../../../database";
import { setLoading, setOpenModal } from "../../../redux/appSlide";
import { RootState } from "../../../redux/store";
import { Editor } from "../../Editor/Editor";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { removeVI } from "jsrmvi";

interface Props {
  record?: IPostModel;
  onFinish?: () => void;
}

const PostModal: React.FC<Props> = ({ record, onFinish }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const _isModalOpened = useSelector(
    (state: RootState) => state.app.modalOpened
  );

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [content, setContent] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (record) {
      setIsEdit(true);
      const { title, description, content, tags } = record;
      setTitle(title);
      setDescription(description);
      setContent(content);
      setTags(tags);
    } else {
      setIsEdit(false);
      setTitle("");
      setDescription("");
      setContent("");
      setTags([]);
    }
  }, [_isModalOpened, record]);

  const handleCreateOrEditPost = async () => {
    dispatch(setLoading(true));

    const accessToken = localStorage.getItem("access_token");
    const url = removeVI(title);

    const result = isEdit
      ? await axios.put(
          "/api/post",
          {
            _id: record?._id.toString(),
            title,
            description,
            content,
            tags,
            url,
          },
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        )
      : await axios.post(
          "/api/post",
          {
            title,
            description,
            content,
            tags,
            url,
          },
          {
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          }
        );

    const { success, data } = result?.data;
    if (success && data) {
      showToast(isEdit, true);
      onFinish?.();
    } else showToast(isEdit, false);

    dispatch(setLoading(false));
    dispatch(setOpenModal(false));
  };

  const showToast = (isEdit: boolean, success: boolean) => {
    const title = success
      ? isEdit
        ? "Chỉnh sửa bài viết thành công"
        : "Thêm bài viết thành công"
      : isEdit
      ? "Chỉnh sửa bài viết thất bại"
      : "Thêm bài viết thất bại";
    toast({
      title,
      status: success ? "success" : "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });
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
            <FormLabel htmlFor="post-title">Tiêu đề bài viết</FormLabel>
            <Input
              id="post-title"
              placeholder="Nhập tên dịch vụ"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired my={5}>
            <FormLabel htmlFor="service-description">Mô tả ngắn</FormLabel>
            <Input
              id="post-description"
              placeholder="Nhập mô tả"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="post-tags">Gắn thẻ</FormLabel>
            <ReactTagInput
              placeholder="Nhập tên thẻ"
              tags={tags}
              onChange={(newTags) => setTags(newTags)}
            />
          </FormControl>

          <FormControl isRequired my={5}>
            <FormLabel htmlFor="post-tags">Nội dung bài viết</FormLabel>
            <Editor
              name="content"
              value={content}
              onChange={(data) => setContent(data)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={() => dispatch(setOpenModal(false))}>
            Hủy bỏ
          </Button>
          <Button colorScheme="teal" onClick={handleCreateOrEditPost}>
            Đồng ý
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { PostModal };
