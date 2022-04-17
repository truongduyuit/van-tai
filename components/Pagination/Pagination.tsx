import { ChevronRightIcon } from "@chakra-ui/icons";
import { HStack, StackProps, Text } from "@chakra-ui/layout";
import { Button, ButtonProps, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
interface Props extends StackProps {
  totalPages: number;
  currentPage: number;
  changeCurrentPage: (currentPage: number) => void;
  activeButtonProps?: ButtonProps;
  inactiveButtonProps?: ButtonProps;
}

const Pagination = ({
  totalPages,
  currentPage,
  changeCurrentPage,
  activeButtonProps,
  inactiveButtonProps,
  ...styleProps
}: Props) => {
  const [firstThreeArray, setFirstThreeArray] = useState([1]);
  const [showLastEllipis, setShowLastEllipis] = useState(true);

  useEffect(() => {
    if (totalPages <= 5) {
      const fArray = [];

      for (let i = 1; i <= totalPages; i++) {
        fArray.push(i);
      }
      setFirstThreeArray(fArray);
    } else {
      if (currentPage < 3) {
        setFirstThreeArray([1, 2, 3]);
        setShowLastEllipis(true);
      } else {
        const fArray = [];
        let index = 1;
        for (let j = currentPage; j >= 0; j--) {
          fArray.push(j);
          if (index === 3) {
            break;
          }
          index++;
        }
        if (currentPage == totalPages - 1) {
          fArray.pop();
        }
        fArray.reverse();
        setFirstThreeArray(fArray);
        if (currentPage == totalPages - 1 || currentPage == totalPages) {
          setShowLastEllipis(false);
        } else {
          setShowLastEllipis(true);
        }
      }
    }
  }, [currentPage, totalPages]);

  const prev = () => {
    if (currentPage > 1) {
      changeCurrentPage(currentPage - 1);
    }
  };
  const next = () => {
    if (currentPage < totalPages) {
      changeCurrentPage(currentPage + 1);
    }
  };

  const showEllipsis = (showEllipis: boolean) => {
    return (
      showEllipis && (
        <Text fontWeight="bold" fontSize="1rem" display="inline-block">
          ・・・
        </Text>
      )
    );
  };

  const isActive = (index: number) => {
    if (index == currentPage) {
      return true;
    }

    return false;
  };

  const createPagiButton = (pageNo: number) => {
    return (
      <Button
        key={pageNo}
        padding="1rem"
        fontSize="1rem"
        fontWeight="bold"
        background="var(--main-bg-color)"
        minWidth="1rem"
        {...(isActive(pageNo)
          ? {
              color: "var(--main-color)",
              boxShadow: "var(--box-shadow-input)",
              ...activeButtonProps,
            }
          : {
              color: "var(--primary-text-color)",
              ...inactiveButtonProps,
            })}
        onClick={() => {
          changeCurrentPage(pageNo);
        }}
      >
        {pageNo}
      </Button>
    );
  };
  const showFirstPagi = () => {
    return !showLastEllipis && createPagiButton(1);
  };
  const showLastPagi = () => {
    if (currentPage !== totalPages) {
      return createPagiButton(totalPages);
    }
  };
  const showPrev = () => {
    if (currentPage != 1) {
      return (
        <IconButton
          aria-label="btn-prev"
          icon={
            <ChevronRightIcon
              w={8}
              h={8}
              color={inactiveButtonProps?.["color"] || "var(--main-color)"}
              transform="rotate(180deg)"
            />
          }
          minW="1rem"
          minH="1rem"
          onClick={prev}
        />
      );
    }
  };
  const showNext = () => {
    if (currentPage < totalPages) {
      return (
        <IconButton
          aria-label="btn-next"
          icon={
            <ChevronRightIcon
              w={8}
              h={8}
              color={inactiveButtonProps?.["color"] || "var(--main-color)"}
            />
          }
          minW="1rem"
          minH="1rem"
          onClick={next}
        />
      );
    }
  };

  return (
    <HStack alignItems="center" justifyContent="center" {...styleProps}>
      {showPrev()}
      <HStack alignItems="center" justifyContent="center" spacing="1rem">
        <React.Fragment>
          {totalPages > 5 && (
            <>
              {showFirstPagi()}
              {showEllipsis(!showLastEllipis)}
            </>
          )}
          {firstThreeArray.map(createPagiButton)}
          {totalPages > 5 && (
            <>
              {showEllipsis(showLastEllipis)}
              {showLastPagi()}
            </>
          )}
        </React.Fragment>
      </HStack>
      {showNext()}
    </HStack>
  );
};

export { Pagination };
