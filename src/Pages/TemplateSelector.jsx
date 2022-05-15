import { DrawerHeader } from "@chakra-ui/react";
import { Drawer, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function TemplateSelector() {
	const [open, setOpen] = useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Box style={{ marginTop: 100 }}>
			<Button variant="outlined" onClick={() => setOpen(true)}>
				See Templates
			</Button>
			<Drawer
				BackdropProps={{ invisible: true }}
				variant="permanent"
				open={open}
				PaperProps={{ sx: { width: "350px" } }}
				onClose={() => setOpen(false)}
			>
				<h1>It Works</h1>
			</Drawer>
		</Box>
	);
}

export default TemplateSelector;
