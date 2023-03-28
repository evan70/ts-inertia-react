import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";

export default function Dashboard({ auth }: PageProps) {
    type User = { id: number; name: string };

    const Test1: User = {
        id: 70,
        name: "evan70 from dashbrd const ",
    };

    const loopd = () => {
        let p = [];
        for (let i = 0; i < 20; i++) {
            p.push(<p key={i}>Hello 20 x 20</p>);
        }
        return p;
    };
    console.log("responsive.sk render!");

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="p-4">
                <div className="mx-auto max-w-[96rem]">
                    <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in! {Test1.name}
                            {loopd()}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
