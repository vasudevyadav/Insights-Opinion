import { getServices } from "@/app/lib/service-catalog";

// Flat list of every main service and its sub-services, used to populate the
// "Please Select" enquiry-type dropdown on lead-capture forms.
export const SERVICE_SELECT_OPTIONS: string[] = getServices().flatMap(
  (service) => [service.title, ...service.children.map((child) => child.title)]
);
