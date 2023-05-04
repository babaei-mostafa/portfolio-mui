import {
  HomeRounded,
  FaceRounded,
  ManageAccountsRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";

const tabProps = (index) => {
  return {
    id: `sidebar-tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
};

export const tabsData = () => {
  const tabs = [
    { label: "صفحه اصلی", icon: <HomeRounded />, ...tabProps(0) },
    { label: "درباره من", icon: <FaceRounded />, ...tabProps(1) },
    {
      label: "نمونه کارهای من",
      icon: <ManageAccountsRounded />,
      ...tabProps(2),
    },
    {
      label: "تماس با من",
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(3),
    },
  ];
  return tabs;
};
