import {
  FormControl,
  Input,
  VStack,
  Text,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IContactInfoModel } from "../../../database";
import { setLoading } from "../../../redux/appSlide";
import { AdminLayout } from "../../Layouts/AdminLayout";

interface Props {
  contactInfo?: IContactInfoModel;
}

const ContactInfoPage: React.FC<Props> = ({ contactInfo }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const [currentRecord] = useState<IContactInfoModel | undefined>(contactInfo);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>(currentRecord?.phone ?? "");
  const [email, setEmail] = useState<string>(currentRecord?.email ?? "");
  const [address, setAddress] = useState<string>(currentRecord?.address ?? "");

  const facebook = currentRecord?.facebook;
  const zalo = currentRecord?.zalo;
  const [fbId, setFbId] = useState<string>(facebook?.id ?? "");
  const [fbFanpage, setFbFanpage] = useState<string>(facebook?.fanpage ?? "");
  const [fbPerson, setFbPerson] = useState<string>(facebook?.person ?? "");
  const [phoneZalo, setPhoneZalo] = useState<string>(zalo ?? "");

  const handleEdited = async () => {
    dispatch(setLoading(true));

    const accessToken = localStorage.getItem("access_token");
    const result = await axios.post(
      "/api/contactInfo",
      {
        phone,
        email,
        address,
        social: {
          facebook: {
            id: fbId,
            fanpage: fbFanpage,
            person: fbFanpage,
          },
          zalo: phoneZalo,
        },
      },
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    );

    dispatch(setLoading(false));
    const { success, data } = result?.data;
    if (success && data) {
      showToast(true);
      setIsEdit(false);
    } else showToast(false);
  };

  const showToast = (success: boolean) =>
    toast({
      title: success
        ? "Cập nhật thông tin liên hệ thành công"
        : "Cập nhật thông tin liên hệ thất bại",
      status: success ? "success" : "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-right",
    });

  return (
    <AdminLayout>
      <VStack spacing={5}>
        <Flex>
          {isEdit ? (
            <Button
              onClick={handleEdited}
              bgColor="primary"
              color="textSecondary"
              variant="outline"
              _hover={{
                bgColor: "textSecondary",
                color: "primary",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Lưu cập nhật
            </Button>
          ) : (
            <Button
              onClick={() => setIsEdit(true)}
              bgColor="primary"
              color="textSecondary"
              variant="outline"
              _hover={{
                bgColor: "textSecondary",
                color: "primary",
              }}
              _focus={{
                outline: "none",
              }}
            >
              Mở khóa chỉnh sửa
            </Button>
          )}
        </Flex>

        <FormControl>
          <Text mb="8px">Số điện thoại: </Text>
          <Input
            size="sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={!isEdit}
          />
        </FormControl>

        <FormControl>
          <Text mb="8px">Địa chỉ: </Text>
          <Input
            size="sm"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            disabled={!isEdit}
          />
        </FormControl>

        <FormControl>
          <Text mb="8px">Email: </Text>
          <Input
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={!isEdit}
          />
        </FormControl>

        <FormControl>
          <Text mb="8px">Mạng xã hội: </Text>

          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Facebook
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <FormControl>
                  <Text mb="8px">App Id: </Text>
                  <Input
                    size="sm"
                    value={fbId}
                    onChange={(e) => setFbId(e.target.value)}
                    disabled={!isEdit}
                  />
                </FormControl>

                <FormControl>
                  <Text mb="8px">Đường dẫn facebook cá nhân: </Text>
                  <Input
                    size="sm"
                    value={fbPerson}
                    onChange={(e) => setFbPerson(e.target.value)}
                    disabled={!isEdit}
                  />
                </FormControl>

                <FormControl>
                  <Text mb="8px">Đường dẫn fanpage: </Text>
                  <Input
                    size="sm"
                    value={fbFanpage}
                    onChange={(e) => setFbFanpage(e.target.value)}
                    disabled={!isEdit}
                  />
                </FormControl>
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Zalo
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <FormControl>
                  <Text mb="8px">SĐT Zalo: </Text>
                  <Input
                    size="sm"
                    value={phoneZalo}
                    onChange={(e) => setPhoneZalo(e.target.value)}
                    disabled={!isEdit}
                  />
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </FormControl>
      </VStack>
    </AdminLayout>
  );
};

export { ContactInfoPage };
