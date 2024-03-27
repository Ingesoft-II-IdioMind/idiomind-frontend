"use client"

import { useAppSelector } from "app/redux/hooks";
import { Loader } from "../Loader";
import { redirect } from "next/navigation";

interface Props {
	children: React.ReactNode;
}

export default function RequireAuth({ children }: Props) {
	const { isLoading, isAuthenticated } = useAppSelector(state => state.auth);
	console.log(isAuthenticated);
	console.log(isLoading);
	// if (isLoading) {
	// 	return (
	// 		<div className="center">
	// 			<Loader color="orange"/>
	// 		</div>
	// 	);
	// }

	if (!isAuthenticated) {
		redirect('/auth/login');
	}

	return <>{children}</>;
}