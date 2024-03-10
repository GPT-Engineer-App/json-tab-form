// Complete the Index page component here
// Use chakra-ui
import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Select, Input, Button, Box, Text } from "@chakra-ui/react";
import { FaSave } from "react-icons/fa";

const Index = () => {
  const [formData, setFormData] = useState({ class: "", name: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveToJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "formData.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <Tabs>
      <TabList>
        <Tab>Form</Tab>
        <Tab>JSON</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <Select placeholder="Select class" name="class" onChange={handleInputChange}>
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </Select>
          <Input placeholder="Name" name="name" onChange={handleInputChange} mt={4} />
        </TabPanel>
        <TabPanel>
          <Box p={4} borderWidth="1px" borderRadius="lg">
            <Text as="pre">{JSON.stringify(formData, null, 2)}</Text>
          </Box>
          <Button leftIcon={<FaSave />} colorScheme="blue" onClick={handleSaveToJson} mt={4}>
            Save to JSON
          </Button>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Index;
