import { Dashboard } from "@/components/dashboard";
import { generateToken } from "@/lib/generate-token";

const DemoPage = () => {
    const token = generateToken({ website: "loglib", name: "", id: "loglib" });
    return (
        <Dashboard
            website={{
                id: "loglib",
                url: "https://loglib.io",
            }}
            showSetup={false}
            token={token}
            isPublic={false}
        />
    );
};

export default DemoPage;
