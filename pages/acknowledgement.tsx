import Container from "@material-ui/core/Container";
import React from "react";
import Layout from "../src/components/Layout";

export default () => {
    return (
        <Layout>
            <Acknowledgement />
        </Layout>
    );
};

const Acknowledgement: React.FunctionComponent = () => {
    return (
        <Container maxWidth="md" component="main">
            <h3>Acknowledgement</h3>
            <ImagesAcknowledgement />
            <SoundsAcknowledgement />
        </Container>
    );
};

const ImagesAcknowledgement: React.FunctionComponent = () => (
    <>
        <h4>Images</h4>
        <ul>
            <li>
                <a href="https://www.flaticon.com/free-icon/backpack_1243535#term=backpack&amp;page=1&amp;position=2">
                    backpack64x64.png
                </a>{" "}
                - Icon made by{" "}
                <a href="https://www.flaticon.com/authors/srip">srip</a> from
                www.flaticon.com
            </li>

            <li>
                <a href="https://www.flaticon.com/free-icon/hourglass_483610">
                    hourglass64x64.png
                </a>{" "}
                - Icon made by{" "}
                <a href="https://www.flaticon.com/authors/those-icons">
                    those-icons
                </a>{" "}
                from www.flaticon.com
            </li>

            <li>
                <a href="https://www.flaticon.com/free-icon/factory_1996732#term=factory&amp;page=1&amp;position=62">
                    factory64x64.png
                </a>{" "}
                - Icon made by{" "}
                <a href="https://www.flaticon.com/authors/monkik">monkik</a>{" "}
                from www.flaticon.com
            </li>

            <li>
                <a href="https://www.flaticon.com/free-icon/storage_1554623">
                    storage64x64.png
                </a>{" "}
                - Icon made by{" "}
                <a href="https://www.flaticon.com/authors/srip">srip</a> from
                www.flaticon.com
            </li>

            <li>
                <a href="https://www.flaticon.com/free-icon/bars_558386">
                    decreasing-bars64x64
                </a>{" "}
                - Icon made by{" "}
                <a href="https://www.flaticon.com/authors/prosymbols">
                    prosymbols
                </a>{" "}
                from www.flaticon.com
            </li>
        </ul>
    </>
);

const SoundsAcknowledgement: React.FunctionComponent = () => (
    <>
        <h4>Sounds</h4>
        <ul>
            <li>
                buy.wav - (original filename hjm-coin_clicker_1.wav) by Hansjörg
                Malthaner under CC-BY 3.0 distributed via{" "}
                <a href="https://opengameart.org/users/varkalandar">
                    opengameart.org/users/varkalandar
                </a>
                {". "}
                Besides renaming, no changes were made to the original files.
            </li>
            <li>
                sell.wav - (original filename hjm-coin_clicker_2.wav) by
                Hansjörg Malthaner under CC-BY 3.0 distributed via{" "}
                <a href="https://opengameart.org/users/varkalandar">
                    opengameart.org/users/varkalandar
                </a>
                {". "}
                Besides renaming, no changes were made to the original files.
            </li>
        </ul>
    </>
);
