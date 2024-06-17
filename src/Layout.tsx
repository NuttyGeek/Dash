import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./components/breadcrumb";
import { Button } from "./components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./components/dropdown-menu";
import { Input } from "./components/input";
import { Sheet, SheetContent, SheetTrigger } from "./components/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/tooltip";
import { useMemo } from "react";
export const Layout = () => {
  const location = useLocation();

  const breadcrumbs: { label: string; value: string }[] = useMemo(() => {
    console.log(":: location", location);
    let breadcrumbs: { label: string; value: string }[] = [];
    switch (location.pathname) {
      case "/login":
        breadcrumbs = [{ label: "Login", value: "/login" }];
        break;
      default:
        breadcrumbs = [];
    }
    breadcrumbs.unshift({ label: "Home", value: "/" });
    return breadcrumbs;
  }, [location]);

  const menuItems = [
    { label: "Home", value: "/home", icon: <Home className="h-5 w-5" /> },
    {
      label: "Orders",
      value: "/orders",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    { label: "Home", value: "/home", icon: <Home className="h-5 w-5" /> },
  ];

  return (
    <div>
      <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
              <Link
                to={"/"}
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">Dashboard</span>
              </Link>
              {menuItems.map((menu, ind) => {
                return (
                  <Tooltip key={ind}>
                    <TooltipTrigger asChild>
                      <Link
                        to="#"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                      >
                        {menu.icon}
                        <span className="sr-only">{menu.label}</span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{menu.label}</TooltipContent>
                  </Tooltip>
                );
              })}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="sr-only">Settings</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Settings</TooltipContent>
              </Tooltip>
            </nav>
          </aside>
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                  <nav className="grid gap-6 text-lg font-medium">
                    <Link
                      to="#"
                      className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                    >
                      <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                      <span className="sr-only">Dashboard</span>
                    </Link>
                    {menuItems.map((menu, ind) => {
                      return (
                        <Link
                          to="#"
                          key={ind}
                          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                          {menu.icon}
                          {menu.label}
                        </Link>
                      );
                    })}
                    <Link
                      to="#"
                      className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                    >
                      <LineChart className="h-5 w-5" />
                      Settings
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  {breadcrumbs?.map((breadcrumb, ind) => {
                    return (
                      <div key={ind}>
                        <BreadcrumbItem>
                          <BreadcrumbLink asChild>
                            <Link to={breadcrumb.value}>
                              {breadcrumb.label}
                            </Link>
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        {ind < breadcrumbs.length - 1 ? (
                          <BreadcrumbSeparator />
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
                  {/* <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="#">Orders</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Recent Orders</BreadcrumbPage>
                  </BreadcrumbItem> */}
                </BreadcrumbList>
              </Breadcrumb>
              <div className="relative ml-auto flex-1 md:grow-0">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="overflow-hidden rounded-full"
                  >
                    <img
                      src="https://ui.shadcn.com/_next/image?url=%2Fplaceholder-user.jpg&w=96&q=75"
                      width={36}
                      height={36}
                      alt="Avatar"
                      className="overflow-hidden rounded-full"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="p-4 sm:px-6 sm:py-0">
              <Outlet />
            </main>
          </div>
        </div>
        <Outlet />
      </TooltipProvider>
    </div>
  );
};
