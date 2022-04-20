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

interface Props {
  record?: IPostModel;
}

const PostModal: React.FC<Props> = ({ record }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const _isModalOpened = useSelector(
    (state: RootState) => state.app.modalOpened
  );

  const [isEdit, setIsEdit] = useState<boolean>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [content, setContent] = useState<string>();
  const [tags, setTags] = useState<string[]>();

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

    // ClassicEditor.create(document.querySelector("#editor"));
  }, [record]);

  useEffect(() => {}, [_isModalOpened]);

  const handleCreateOrEditPost = async () => {
    dispatch(setLoading(true));

    const result = isEdit
      ? await axios.put("/api/service", {
          _id: record?._id.toString(),
          name,
        })
      : await axios.post("/api/service", {
          name,
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
            <Input
              id="post-tags"
              placeholder="Nhập tên thẻ"
              value={tags}
              //   onChange={(e) => setTags(e.target.value)}
              disabled
            />
          </FormControl>

          <FormControl isRequired my={5}>
            <FormLabel htmlFor="post-tags">Nội dung bài viết</FormLabel>
            <Editor
              name="content"
              value={content}
              onChange={(data) => setContent(content)}
            />
            <Input
              id="editor"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              disabled
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
