import type { LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Page } from "~/components/Page";
import { getInfoByCountryCode } from "./geoapi";

export async function loader({ request }: LoaderArgs) {
    const url = new URL(request.url);
    const country = url.searchParams.get("countryCode");

    return country ? getInfoByCountryCode(country) : { };
}

export default function Index() {
    const { 
        name, 
        official, 
        flag, 
        capital,
        population,
        map,
        region,
        subregion 
    } = useLoaderData<typeof loader>();

    return (
        <Page>
            <section style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
                <Form method="get" action=".">
                    <label>
                        Enter country code:{" "}
                        <input
                        type="text"
                        name="countryCode"
                        id="countryCode"
                        placeholder="Country Code"
                        />
                    </label> {" "}
                    <button type="submit">Get Country Info</button>
                    <br />
                </Form>
                <br /><hr />
                <article>
                    {name && official && <h4>Country Name: {name} ({official} {flag}) </h4>}
                    {capital && <p>Country Capital: {capital} </p>}
                    {population && <p>Country Population: {population}</p>}
                    {map && region && subregion && 
                        <p>
                            Country Location: {region} - {subregion} {" "}
                            (<a href={map}>Map Link</a>)
                        </p>
                    }
                </article>
                <footer>
                    <br /><hr />
                    © {(new Date()).getFullYear()} Kyle Tolliver -- Geography App
                </footer>
            </section>
        </Page>
    );
}
